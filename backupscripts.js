const usedIndexes = new Set()
const input = document.getElementById("itemInput");
const storageKey = "items"

input.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        addItems()
        randomHolder()
    }

})

function randomHolder() {
    const placeHolders = [
        "Do math homework",
        "Email boss",
        "Take a break",
        "Prep for Debate",
        "Try and figure what's wrong with Tabroom",
        "Finish that lego set",
        "Learn something new",
        "Journal",
        "Congratulate myself",
        "Read a chapter of a book",
        "Call a friend",
        "Watch an educational video",
        "Go for a walk",
        "Write a letter to someone",
        "Organize your workspace",
        "Make a to-do list",
        "Meditate for 10 minutes",
        "Plan your week",
        "Learn a new skill online",
        "Clean out your email inbox",
        "Write down a dream or goal",
        "Practice a hobby",
        "Stretch and do some light exercise",
        "Try a new recipe",
        "Plan your meals for the week",
        "Sort through old clothes",
        "Listen to a podcast",
        "Work on a personal project",
        "Do a random act of kindness",
        "Take a power nap",
        "Try a new workout routine",
        "Research a topic you're curious about",
        "Take photos for a personal project",
        "Visit a new place in your town",
        "Sketch or doodle something",
        "Reflect on your day and note highlights",
        "Do something creative",
        "Start planning for a future trip",
        "Update your resume or LinkedIn",
        "Declutter a section of your home",
        "Set new personal goals",
        "Learn to juggle",
        "Write a poem or short story",
        "Take a digital detox for an hour",
        "Rearrange your furniture",
        "Listen to a new music genre",
        "Try learning a new language",
        "Give yourself a compliment",
        "Call a family member",
        "Create a vision board",
        "Play a brain game or puzzle",
        "Do a 10-minute home workout",
        "Start a new DIY project",
        "Watch a documentary",
        "Attend a virtual event or webinar",
        "Write an email to your future self",
        "Make a budget plan",
        "Declutter your phone apps",
        "Write a blog post or journal entry",
        "Go to a park and observe nature",
        "Make a gratitude list",
        "Learn a new magic trick",
        "Revisit your goals for the year",
        "Plan your next big adventure",
        "Do something spontaneous",
        "Practice mindfulness",
        "Write a letter to your younger self",
        "Create a playlist for your mood",
        "Clean your car",
        "Get outside and take photos of nature",
        "Start a garden",
        "Explore a nearby museum or art gallery",
        "Take an online quiz to discover something new",
        "Write a short thank-you note to someone",
        "Find and try a new hobby",
        "Plan a themed movie night",
        "Revisit old childhood memories",
        "Reorganize your closet",
        "Try a new workout challenge",
        "Create a self-care routine",
        "Learn how to make a new craft",
        "Take a virtual tour of a famous location",
        "Try learning basic sign language",
        "Experiment with photography techniques",
        "Write a letter to a future friend",
        "Design a vision board for your life goals",
        "Listen to an audiobook",
        "Practice your handwriting",
        "Take a creative writing challenge",
        "Try a different meditation style",
        "Learn the basics of coding",
        "Write a gratitude journal entry",
        "Find a hobby you used to love and try it again",
        "Host a virtual hangout with friends",
        "Play a new strategy game",
        "Go through old music playlists and rediscover gems",
        "Take a bubble bath and relax",
        "Create a list of life goals",
        "Get into a new workout routine",
        "Try a virtual escape room with friends",
        "Research a topic you've always wanted to learn about",
        "Host a solo movie marathon",
        "Make a list of things you're grateful for",
        "Learn how to knit or crochet",
        "Create a personal bucket list",
        "Take a break to enjoy your favorite treat",
        "Try an online puzzle challenge",
        "Go through old photographs and make a scrapbook",
        "Spend time working on a new project",
        "Make a vision board for your career goals",
        "Take a short walk without your phone",
        "Read an inspiring biography",
        "Write down your goals for the next 5 years",
        "Start a new weekly habit",
        "Learn a fun dance routine",
        "Try cooking a meal from a different culture",
        "Plan your dream vacation",
        "Try a new hobby for 30 days",
        "Write a list of things you’re proud of",
        "Redecorate your workspace or room",
        "Take an online personality quiz",
        "Create a time capsule with current favorites",
        "Start a gratitude jar",
        "Try something outside your comfort zone",
        "Organize your digital files and photos",
        "Review your finances and make a savings plan",
        "Create a self-care checklist",
        "Practice a new language on Duolingo",
        "Go to a new coffee shop or restaurant",
        "Take an online photography class",
        "Make your own vision board",
        "Write a review for a book or product",
        "Do a 30-minute home cleaning session",
        "Try a new type of workout video",
        "Pick a random charity to donate to",
        "Organize your Pinterest boards",
        "Write a letter to your future self in 10 years",
        "Do a DIY home improvement project",
        "Reconnect with a childhood friend",
        "Do a random act of kindness for someone",
        "Make a list of things to accomplish this year"
    ];

    const specialPlaceholder = "Wish the creator of this website happy birthday.";
    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();

    if (currentMonth === 11 && currentDay === 15) {
        console.log("It's the developers birthday today!")
        input.placeholder = specialPlaceholder;
    } else {
        if (usedIndexes.size >= placeHolders.length) {
            usedIndexes.clear(); // Reset when all placeholders are used
        }
        while (true) {
            const randomIdx = Math.floor(Math.random() * placeHolders.length);
            if (usedIndexes.has(randomIdx)) continue;
            input.placeholder = placeHolders[randomIdx];
            usedIndexes.add(randomIdx);
            break;
        }
    }
}

let items = []
const itemsDiv = document.getElementById("items")

function renderItems() {
    itemsDiv.innerHTML = "";
    for (const [idx, item] of Object.entries(items)) {
        const container = document.createElement("div");
        container.style.marginBottom = "0.5%";

        const text = document.createElement("p");
        text.style.display = "inline";
        text.style.fontSize = "20px";
        text.textContent = item;

        const button = document.createElement("button");
        button.classList.add("btn", "btn-link", "p-0", "border-0", "delete-btn");
        const icon = document.createElement("i");
        icon.classList.add("bi", "bi-trash", "text-danger", "fs-5", "delete-btn");

        button.appendChild(icon);
        button.style.marginLeft = "2%";
        button.style.marginRight = "1%";
        button.onclick = () => removeItems(idx);

        container.appendChild(button);
        container.appendChild(text);
        itemsDiv.appendChild(container);
    }
}

function loadItems(){
    const OldItems = localStorage.getItem(storageKey)
    if (OldItems) items = JSON.parse(OldItems);
    renderItems()
}

function saveItems(){
    const stringItems = JSON.stringify(items)
    localStorage.setItem(storageKey, stringItems)
}


function addItems() {
    const value = input.value;
    if (!value) {
        // Create the alert container
        const alertBs = document.createElement("div");
        alertBs.classList.add("alert", "alert-warning", "d-flex", "justify-content-start", "align-items-center");
        alertBs.textContent = "You can't have an empty task!";
        alertBs.style.position = "fixed";
        alertBs.style.top = "10px";
        alertBs.style.left = "50%";
        alertBs.style.transform = "translateX(-50%)";
        alertBs.style.zIndex = "1000";
        alertBs.style.padding = "10px 20px";
        alertBs.style.borderRadius = "5px";
        alertBs.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.2)";
        alertBs.style.maxWidth = "300px";
        alertBs.style.display = "flex";

        // Create close button using ✕ symbol
        const closeButton = document.createElement("button");
        closeButton.innerHTML = "✕";
        closeButton.style.border = "none";
        closeButton.style.background = "transparent";
        closeButton.style.color = "dark grey";
        closeButton.style.fontSize = "20px";
        closeButton.style.cursor = "pointer";
        closeButton.style.marginRight = "10px";  // Space between the button and the text

        // Close the alert when the button is clicked
        closeButton.onclick = () => alertBs.remove();

        // Append the close button to the alert
        alertBs.prepend(closeButton);

        // Append the alert to the document body
        document.body.appendChild(alertBs);

        // Automatically remove after 3.5 seconds
        setTimeout(() => {
            if (alertBs) alertBs.remove();
        }, 3500);

        return;
    }

    items.push(value);
    renderItems();
    input.value = "";
    saveItems()
}


function removeItems (idx){
    items.splice(idx, 1)
    renderItems()
    saveItems()
}

document.addEventListener("DOMContentLoaded",loadItems)
