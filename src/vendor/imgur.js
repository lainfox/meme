import 'whatwg-fetch'

export const processStatus = response => {
  if (response.status === 200 || response.status === 0) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error('Error loading: '))
  }
};

export const parseJson = response => {
  return response.json();
};


// async function init() {
//   const response = await fetch('file.txt');
//   const reader = response.body.getReader();
//   const contentLengthHeader = response.headers.get('Content-Length');
//   const resourceSize = parseInt(contentLengthHeader, 10);

//   async function read(reader, totalChunkSize = 0, chunkCount = 0) {
//     const {value: {length} = {}, done} = await reader.read();

//     if (done) {
//       return chunkCount;
//     }

//     const runningTotal = totalChunkSize + length;
//     const percentComplete = Math.round((runningTotal / resourceSize) * 100);

//     const progress = `${percentComplete}% (chunk ${chunkCount})`;

//     console.log(progress);
//     document.body.innerHTML += progress + '<br />';

//     return read(reader, runningTotal, chunkCount + 1);
//   }

//   const chunkCount = await read(reader);
//   console.log(`Finished! Received ${chunkCount} chunks.`);
// }

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