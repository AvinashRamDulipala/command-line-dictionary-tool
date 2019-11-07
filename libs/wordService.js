const request = require('request-promise');
const colors= require('colors');

let apihost='https://fourtytwowords.herokuapp.com';
let api_key='b972c7ca44dda72a5b482052b1f5e13470e01477f3fb97c85d5313b3c112627073481104fec2fb1a0cc9d84c2212474c0cbe7d8e59d7b95c7cb32a1133f778abd1857bf934ba06647fda4f59e878d164';
let options ={
    method:'GET',
    uri:'',
	json:true,
	headers:{
		"Accept": "application/json",
		"app_id": "1f5c4a48",
		"app_key": api_key
	}
};

let fetchDefinitions=(word)=>{
    return new Promise((resolve,reject)=>{
        options.uri=`${apihost}/word/${word}/definitions?api_key=${api_key}`;
        request(options).then(response=>{
            return resolve(response.results[0]);
        }).catch(err=>{
            return reject(err.error);
        })
    })
}
let fetchSynonyms=(word)=>{
    return new Promise((resolve,reject)=>{
        options.uri=`${apihost}/word/${word}/relatedWords?api_key=${api_key}
        `;
        request(options).then(response=>{
            return resolve(response.results[0]);
        }).catch(err=>{
            return reject(err.error);
        })
    })
}
let fetchAntonyms=(word,limit)=>{
    return new Promise((resolve,reject)=>{
        options.uri=`${apihost}/word/${word}/relatedWords?api_key=${api_key}`;
        request(options).then(response=>{
            return resolve(response.results[0]);
        }).catch(err=>{
            return reject(err.error);
        })
    })
}
let fetchAntsAndSyns=(word)=>{
    return new Promise((resolve,reject)=>{
        options.uri=`${baseUri}/entries/en/${word}/synonyms;antonyms`;

        request(options).then(response=>{
            return resolve(response.results[0]);
        }).catch(err=>{
            return reject(err.error);
        })
    })
}

let validateWord=(word)=>{
    return new Promise((resolve,reject)=>{
        options.uri=`${apihost}/word/${word}/examples?api_key=${api_key}`;
        request(options).then(response=>{
            return resolve(true);                
        }).catch(err=>{
            return reject(err);
        })
    })
}
let getRandomWord=()=>{
    return new Promise((resolve,reject)=>{
        options.uri=`${apihost}/words/randomWord?api_key=${api_key}`;
        options.qs['limit']=42;
        request(options).then(response=>{
            return resolve(JSON.parse(response).word);
        }).catch(err=>{
            return reject(JSON.parse(err.error));
        })
    })
}

module.exports={
    fetchDefinitions:fetchDefinitions,
    fetchAntonyms:fetchAntonyms,
    fetchSynonyms:fetchSynonyms,
	fetchAntsAndSyns:fetchAntsAndSyns,
    validateWord:validateWord,
    getRandomWord:getRandomWord
}