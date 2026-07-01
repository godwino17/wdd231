const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const uoList = document.getElementById("list"); // Grab ul element from DOM

const allBtn = document.getElementById("all"); // Grab "All" button from DOM
const cseBtn = document.getElementById("cse"); // Grab "CSE"  button from DOM
const wddBtn = document.getElementById("wdd"); // Grab "WDD" button from DOM


// Wait for "All Courses" button to be clicked
if (allBtn.addEventListener("click", () => {
    uoList.innerHTML = "";

    allBtn.style.backgroundColor = "wheat";
    cseBtn.style.backgroundColor = "white";
    wddBtn.style.backgroundColor = "white";

    let score = 0;

    for (course of courses) {
        let title = course.subject;
        let code = course.number;
        let status = course.completed;
        let credits = course.credits;
        score += credits;

        if (status === true) {
            let li = document.createElement("li");
            li.textContent = `✔️ ${title}${code}`;
            li.style.backgroundColor = "rgba(2, 226, 2, 0.29)";
            uoList.append(li);
        }

        else {
            let li = document.createElement("li");
            li.textContent = `✖️ ${title}${code}`;
            li.style.backgroundColor = "rgba(255, 0, 0, 0.29)";
            uoList.append(li);
        }
    }
    document.getElementById("total-credits").textContent = `The total numbers of credits for the courses listed above is: ${score}`;
}));


// Wait for "CSE Courses" button to be clicked
if (cseBtn.addEventListener("click", () => {
    const cseCourses = courses.filter(course => course.subject.charAt(0) === "C");
    uoList.innerHTML = "";

    allBtn.style.backgroundColor = "white";
    cseBtn.style.backgroundColor = "wheat";
    wddBtn.style.backgroundColor = "white";

    let score = 0;

    for (course of cseCourses) {
        let title = course.subject;
        let code = course.number;
        let status = course.completed;
        let credits = course.credits;
        score += credits;

        if (status === true) {
            let li = document.createElement("li");
            li.textContent = `✔️ ${title}${code}`;
            li.style.backgroundColor = "rgba(2, 226, 2, 0.29)";
            uoList.append(li);
        }

        else {
            let li = document.createElement("li");
            li.textContent = `✖️ ${title}${code}`;
            li.style.backgroundColor = "rgba(255, 0, 0, 0.29)";
            uoList.append(li);
        }
    }
    document.getElementById("total-credits").textContent = `The total numbers of credits for the courses listed above is: ${score}`;
}));


// Wait for "WDD Courses" button to be clicked
if (wddBtn.addEventListener("click", () => {
    const wddCourses = courses.filter(course => course.subject.charAt(0) === "W");
    uoList.innerHTML = "";

    allBtn.style.backgroundColor = "white";
    cseBtn.style.backgroundColor = "white";
    wddBtn.style.backgroundColor = "wheat";

    let score = 0;

    for (course of wddCourses) {
        let title = course.subject;
        let code = course.number;
        let status = course.completed;
        let credits = course.credits;
        score += credits;

        if (status === true) {
            let li = document.createElement("li");
            li.textContent = `✔️ ${title}${code}`;
            li.style.backgroundColor = "rgba(2, 226, 2, 0.29)";
            uoList.append(li);
        }

        else {
            let li = document.createElement("li");
            li.textContent = `✖️ ${title}${code}`;
            li.style.backgroundColor = "rgba(255, 0, 0, 0.29)";
            uoList.append(li);
        }
    }
    document.getElementById("total-credits").textContent = `The total numbers of credits for the courses listed above is: ${score}`;
}));