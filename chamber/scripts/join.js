const LearnMore = document.getElementById('learnMore');

const nonProfitA = document.querySelector('.non button');
const bronzeA = document.querySelector('.bronze button');
const silverA = document.querySelector('.silver button');
const goldA = document.querySelector('.gold button');

const dataSRC = "./data/members.json"; //✅


async function displayMembershipLevel() {
    const response = await fetch(dataSRC);
    const data = await response.json();

    if (nonProfitA.addEventListener('click', () => {
        
        if (data.filter(level => level.membershipLevel.toLowerCase() === "non profit")) {
            // console.log('yes');
            LearnMore.innerHTML = '';
            LearnMore.innerHTML = `
            <div class="heading">
                <h3>Non-Profit Membership Benefits</h3>
                <button aria-label="close" id="close">x</button>
            </div>
            <p><span>Entry Fee: </span>₦50,000 / year — Subsidized rate for registered charities, educational organizations, and community groups.</p>
            <section>
                <h4>Individual Benefits</h4>
                <ul>
                    <li>Full entry to the standard online member directory.</li>
                    <li>Monthly subscription to the industry newsletter.</li>
                    <li>10% discount on general admission event tickets.</li>
                    <li>Access to public community forums and peer support groups.</li>
                </ul>
            </section>`;

            LearnMore.showModal();
            document.getElementById('close').addEventListener('click', () => {
                LearnMore.close();
            });
        }
        
    }));

    if (bronzeA.addEventListener('click', () => {
        if (data.filter(level => level.membershipLevel.toLowerCase() === "bronze")) {
            // console.log('yes');
            LearnMore.innerHTML = '';
            LearnMore.innerHTML = `
            <div class="heading">
                <h3>Bronze Membership Benefits</h3>
                <button aria-label="close" id="close">x</button>
            </div>
            <p><span>Entry Fee: </span>₦150,000 / year — Standard entry-level rate for individual professionals and growing startups.</p>
            <section>
                <h4>Individual Benefits</h4>
                <ul>
                    <li>Standard business listing in the member directory.</li>
                    <li>Access to 2 free professional training webinars per year.</li>
                    <li>15% discount on all general event tickets.</li>
                    <li>Invitation to bi-monthly member networking mixers.</li>
                </ul>
            </section>`;
        }

        LearnMore.showModal();
        document.getElementById('close').addEventListener('click', () => {
            LearnMore.close();
        });
    }));

    if (silverA.addEventListener('click', () => {
        if (data.filter(level => level.membershipLevel.toLowerCase() === "silver")) {
            // console.log('yes');
            LearnMore.innerHTML = '';
            LearnMore.innerHTML = `
            <div class="heading">
                <h3>Silver Membership Benefits</h3>
                <button aria-label="close" id="close">x</button>
            </div>
            <p><span>Entry Fee: </span>₦300,000 / year — Mid-tier growth rate for established businesses looking for increased visibility.</p>
            <section>
                <h4>Individual Benefits</h4>
                <ul>
                    <li>Includes all Bronze tier perks.</li>
                    <li>Unlimited access to the archived training video library.</li>
                    <li>25% discount on all events, workshops, and conferences.</li>
                    <li>One 1-week "Spotlight" feature on the homepage per quarter.</li>
                    <li>Early-bird registration window for high-demand special events.</li>
                </ul>
            </section>`;
        }

        LearnMore.showModal();
        document.getElementById('close').addEventListener('click', () => {
            LearnMore.close();
        });
    }));

    if (goldA.addEventListener('click', () => {
        if (data.filter(level => level.membershipLevel.toLowerCase() === "silver")) {
            // console.log('yes');
            LearnMore.innerHTML = '';
            LearnMore.innerHTML = `
            <div class="heading">
                <h3>Silver Membership Benefits</h3>
                <button aria-label="close" id="close">x</button>
            </div>
            <p><span>Entry Fee: </span>₦550,000 / year — Premium elite rate for enterprise organizations seeking maximum market exposure.</p>
            <section>
                <h4>Individual Benefits</h4>
                <ul>
                    <li>Includes all Silver tier perks.</li>
                    <li>Permanent "Premium Spotlight" banner placement on the homepage.</li>
                    <li>Standing invitation to private VIP executive dinners and roundtables.</li>
                    <li>40% discount on all events for up to 3 company representatives.</li>
                    <li>2 free VIP tickets to the annual flagship gala.</li>
                    <li>Direct line to a personal account manager for priority booking.</li>
                </ul>
            </section>`;
        }

        LearnMore.showModal();
        document.getElementById('close').addEventListener('click', () => {
            LearnMore.close();
        });
    }));
}

displayMembershipLevel();