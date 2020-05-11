
import fakeApi from '@/lib/fakeAPI'

export const fetchActivities = () => {
    return fakeApi.get('activities', { force: 1 })
}

export const fetchCategories = () => {
    return fakeApi.get('categories', { force: 1 })
}

export const fetchUsers = () => {
    return {
        name: "Filip Jerga",
        id: "-Aj34jknvncx98812"
    }
}

function generateUid() {
    return Math.floor(new Date() * Math.random());
}

export const createActivityAPI = (a) => {
    a.id = generateUid();
    a.progress = 0;
    a.createdAt = new Date();
    a.updatedAt = new Date();

    return fakeApi.post('activities', a);
}

export const deleteActivityAPI = (a) => {
    return fakeApi.delete('activities', a);
}