

const activities = {
    '1546968934': {
        id: '1546968934',
        title: 'Learn Vue.js',
        notes: 'I started today and it was not good.',
        progress: 0,
        category: '1546969049',
        createdAt: 1546969144391,
        updatedAt: 1546969144391
    },
    '1546969212': {
        id: '1546969212',
        title: 'Read Witcher Books',
        notes: 'These books are super nice',
        progress: 0,
        category: '1546969049',
        createdAt: 1546969144391,
        updatedAt: 1546969144391
    }
}

function canContinue() {
    const rndNumber = Math.floor(Math.random() * 10);
    if (rndNumber > 5) {
        return true;
    }
    return false;
}

export const fetchActivities = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (canContinue()) {
                resolve(activities)
            }
            else {
                reject('Cannot fetch activities')
            }
        }, 2000);
    })

}

export const fetchUsers = () => {
    return {
        name: "Filip Jerga",
        id: "-Aj34jknvncx98812"
    }
}

export const fetchCategories = () => {
    return {
        "1546969049": { text: "books", id: '1546969049' },
        "1546969225": { text: "movies", id: '1546969225' }
    }
}

// const generateUid = () => {
//     return Math.floor(new Date() * Math.random());
// }

function generateUid() {
    return Math.floor(new Date() * Math.random());
}

export const createActivityAPI = (a) => {
    a.id = generateUid();
    a.progress = 0;
    a.createdAt = new Date();
    a.updatedAt = new Date();

    return new Promise((resolve, reject) => {
        resolve(a)
    })
}