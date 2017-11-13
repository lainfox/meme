import 'whatwg-fetch'

const processStatus = response => {
  if (response.status === 200 || response.status === 0) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error('Error loading: '))
  }
};

const parseJson = response => {
  return response.json();
};

const Imgur = () => {
	const imgurApi = 'https://api.imgur.com/3/image';
	// const imgurApi = 'https://api.imgur.com/3/upload.json';
	const clientId = '99494c825f1f07c';
	const token = `Client-ID ${clientId}`;
	
	return {
		post(base64Image) {
	    const formData = new FormData();
	    formData.append('type', 'file');
	    formData.append('image', base64Image);

	    return fetch(imgurApi, {
	        method: 'POST',
	        headers: {
            Accept: 'application/json',
            Authorization: 'Client-ID 99494c825f1f07c'// imgur specific
	        },
	        body: formData
	    })
      .then(processStatus)
      .then(parseJson);

			// fetch('https://api.imgur.com/3/upload.json', {
		 //    method: 'POST',
		 //    headers: {
		 //      Accept: 'application/json',
		 //      Authorization: 'Client-ID dc708f3823b7756'// imgur specific
		 //    },
		 //    body: formData
		 //  })
		 //    .then(processStatus)
		 //    .then(parseJson)
		},

		delete() {

		}
	}
}

export default new Imgur;