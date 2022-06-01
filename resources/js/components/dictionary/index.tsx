import store from "../../redux/store";

type Props = {
    lang: "rus" | "eng";
};

const Rus: {} = {
    orgName: "Название организации",
};

const Eng: {} = {
    orgName: "Organization's name",
};

const Dictionary = (): {} => {
    const state: any = store.getState();
    // console.log('store: ', store)
    if (state.lang === "rus") {
        return Rus;
    } else if (state.lang === "eng") {
        return Eng;
    } else {
        return {};
    }
};

// Dictionary()

export default Dictionary;
