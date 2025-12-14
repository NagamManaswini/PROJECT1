function analyzeRepo() {
    const repoUrl = document.getElementById("repoUrl").value.trim();

    if (!repoUrl) {
        alert("Please paste a GitHub repository URL");
        return;
    }

    const scoreEl = document.getElementById("score");
    const summaryEl = document.getElementById("summary");
    const roadmapEl = document.getElementById("roadmap");
    const resultBox = document.getElementById("result");

    // Show result box
    resultBox.style.display = "block";

    // Fake AI loading
    scoreEl.innerText = "Analyzing...";
    summaryEl.innerText = "AI is evaluating the repository...";
    roadmapEl.innerHTML = "";

    setTimeout(() => {
        let score, summary, roadmap;

        if (repoUrl.includes("react") || repoUrl.includes("facebook")) {
            score = "90 / 100";
            summary = "Excellent project structure with strong real-world relevance and documentation.";
            roadmap = [
                "Add more automated tests",
                "Improve issue and PR templates",
                "Enhance CI/CD pipelines"
            ];
        } else if (repoUrl.includes("octocat")) {
            score = "70 / 100";
            summary = "Clean structure with basic documentation. Suitable for beginners.";
            roadmap = [
                "Expand README documentation",
                "Add unit tests",
                "Use meaningful commit messages"
            ];
        } else {
            score = "45 / 100";
            summary = "Basic project setup with limited structure and documentation.";
            roadmap = [
                "Create a detailed README file",
                "Organize files into folders",
                "Commit code regularly"
            ];
        }

        scoreEl.innerText = "Score: " + score;
        summaryEl.innerText = summary;

        roadmap.forEach(step => {
            const li = document.createElement("li");
            li.innerText = step;
            roadmapEl.appendChild(li);
        });

    }, 1500);
}