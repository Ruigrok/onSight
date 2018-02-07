import axios from 'axios';

const userHelpers = {

    getUser: (email) => {
        return axios.get('/api/users/' + email)
            .then(response => {
                return response;
            })
    },

    createUser: (email, name, photoRef) => {
        var newUser = {
            email: email,
            name: name,
            photoRef: photoRef
        }
        return axios.post('/api/users/', newUser)
            .then(response => {
                return response;
            })
    },

    updateUser: (id, name, photo, about) => {
        var updateInfo = {};
        if (name !== '') {
            updateInfo['name'] = name;
        }
        if (photo !== '') {
            updateInfo['photoRef'] = photo;
        }
        if (about !== '') {
            updateInfo['about'] = about;
        }
        return axios.put('/api/users/' + id, updateInfo);
    },

    cloudinaryPhoto: (image) => {
        const cloudName = 'ruigrok';
        const url = 'https://api.cloudinary.com/v1_1/' + cloudName + '/image/upload';

        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "usuh6jax");
        formData.append("api_key", "495555397782837");
        formData.append("timestamp", (Date.now() / 1000) | 0);

        return axios.post(url, formData, {
            headers: { "X-Requested-With": "XMLHttpRequest" },
        }).then(response => {
            return response;
        })
    },

    getUsers: () => {
        return axios.get('/api/users')
        .then(response => {
            return response;
        })
    }
}

export default userHelpers;