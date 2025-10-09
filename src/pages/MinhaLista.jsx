import React, {useState, useEffect} from "react";

export default function MinhaLista() {
    const [minhaLista, setMinhaLista] = useState([]);

    //Inicia a o localStorage
    useEffect(() => {
        const filmesSalvos = localStorage.getItem("minhaLista");
        if (filmesSalvos) {
            setMinhaLista(JSON.parse(filmesSalvos));
        }
    }, []);
}