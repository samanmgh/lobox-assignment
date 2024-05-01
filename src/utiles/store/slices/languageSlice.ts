import {createSlice} from "@reduxjs/toolkit";

interface LanguageInterface {
    selectedLanguage: {
        lang: string;
        loc: string
    },
    languages: {
        id: string;
        name: string;
        rtl: boolean;
    }[],
    locations: {
        id: string;
        name: string;
        lang: string;
        phonePrefix: string;
    }[],
}

const initialState: LanguageInterface = {
    selectedLanguage: {lang: 'en', loc: 'UN'},
    languages: [],
    locations: []
}


const LanguageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {},
});

export default LanguageSlice.reducer;
