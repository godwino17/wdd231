const memberContainer = document.querySelector('.member-cnt');

export default async function showMemberCard() {
    const response = await fetch('data/members.json'); // fetch the member array from JSON file
    const data = await response.json();

    // Filter members to only those with "Silver" or "Gold" membership level.
    const filteredMember = data.filter(member => member.membershipLevel.toLowerCase() === "silver" || member.membershipLevel.toLowerCase() === "gold");
    
    // Shuffle the array
    const shuffleMember = [...filteredMember].sort(() => 0.5 - Math.random());
    let i = 0;
    // Loop through the shuffled array and pick the 1st 3 members to display.
    for (const member of shuffleMember) {
        
        if (i === 3) {
            break
        }
        i++;
        // console.log(member);
        const companyCard = document.createElement('section');

        const cName = document.createElement('h3');
        cName.textContent = member.name;

        const cLogo = document.createElement('img');
        cLogo.setAttribute('src', member.image);
        cLogo.setAttribute('alt', `${member.name} Logo`);
        cLogo.setAttribute('width', 150);
        cLogo.setAttribute('height', 'auto');

        const cPhone = document.createElement('p');
        cPhone.textContent = member.number;
        const cAddress = document.createElement('p');
        cAddress.textContent = member.address;

        const websiteURL = document.createElement('a');
        websiteURL.textContent = "Visit Website";
        websiteURL.setAttribute('href', member.website);

        const level = document.createElement('p');
        level.innerHTML = `<span>Membership Level:</span> ${member.membershipLevel}`;
        
        companyCard.append(cLogo);
        companyCard.append(cName);
        companyCard.append(cAddress);
        companyCard.append(cPhone);
        companyCard.append(level);
        companyCard.append(websiteURL);
        memberContainer.append(companyCard);
    }
}
