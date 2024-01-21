console.log("This js file is made for CV Screener Practice");

const data = [
    {
        name: 'Pritam',
        age: 23,
        city: 'Pune',
        language: 'MERN Stack',
        img: 'https://randomuser.me/portraits/men/1.jpg'
    },
    {
        name: 'Vishal',
        age: 21,
        city: 'Pune',
        language: 'Java Full Stack',
        img: 'https://randomuser.me/portraits/men/5.jpg'
    },
    {
        name: 'Omkar',
        age: 25,
        city: 'Pune',
        language: 'UI/UX Design',
        img: 'https://randomuser.me/portraits/men/8.jpg'
    },
    {
        name: 'Kabir',
        age: 28,
        city: 'Pune',
        language: 'Website Designer',
        img: 'https://randomuser.me/portraits/men/7.jpg'
    },
    {
        name: 'Deepak',
        age: 29,
        city: 'Pune',
        language: 'Web Development',
        img: 'https://randomuser.me/portraits/men/3.jpg'
    },

]

console.log(data);

// CV Iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };
}

const candidates = cvIterator(data);
console.log(candidates);

let nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', nextCv);

function nextCv() {
    console.log("next button clicked");
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    const currentCandidates = candidates.next().value;
    console.log(currentCandidates)
    image.innerHTML = `<img src='${currentCandidates.img}'>`;

    // image.innerHTML = `<h1>Hello</h1>`;

    profile.innerHTML = `<ul class="list-group">
                            <li class="list-group-item">Name : ${currentCandidates.name}</li>
                            <li class="list-group-item">Age : ${currentCandidates.age}</li>
                            <li class="list-group-item">City : ${currentCandidates.city}</li>
                            <li class="list-group-item">Language : ${currentCandidates.language}</li>
                        </ul>`;


}

let refresh = document.getElementById('refresh');
refresh.addEventListener('click', function () {
    location.reload();
})