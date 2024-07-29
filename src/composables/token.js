import { ref } from "vue";

const useToken = () =>{

    const title = ref("")
    const value = ref("")


    const addToken = () =>{

    }

    const editToken = () =>{

    }

    return{
        title,
        value,
        addToken,
        editToken
    }

};


export default useToken;