import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const getCountries = async () => {
    try{
        const res = await axios.get(`${API_URL}/countries`);
        const countries = await res.data;
     
        return countries;
    } catch(err){
        console.error(err)
    }
};

const getCountry = async (name)=>{
     try {
       const res = await axios.get(`${API_URL}/countries/${name}`);
       const country = await res.data;

       return country;
     } catch (err) {
       console.error(err);
     }
}

const orderByQuery = async(query, page)=>{
     try {
       const res = await axios.get(`${API_URL}/countries?sort_by=${query}&page=${page}&size=10`);
       const countries = await res.data;

       return countries;
     } catch (err) {
       console.error(err);
     }
}

export {getCountries, getCountry, orderByQuery};
