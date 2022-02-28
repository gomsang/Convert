import shoes from "../datas/kind_shoes.json";
import clothes from "../datas/kind_clothes.json";
import clothes_wm from "../datas/kind_clothes_women.json";
import bed from "../datas/kind_bed.json";
import React, {useEffect, useState} from "react";

export default function QueryResult(props) {
    let result = []
    const choose = [shoes, clothes, clothes_wm, bed];

    useEffect(() => {
        for (let i = 0; i < choose.length; i++) {
            Object.keys(choose[i].data).forEach((key) => {
                choose[i].data[key].data.forEach(data => {
                    if (props.inputData !== "" && (data.name.indexOf(props.inputData) === 0)) {
                        result.push({
                            kind: choose[i].name,
                            region: key,
                            rank: data.rank,
                            name: data.name
                        })
                    }
                })
            })
        }

        console.log(result)
    }, [props.inputData])
    useEffect(()=>{},[result])

    return (
        <ol>
            {result.map((a)=><div>{a}</div>)}
            {result.map((key,idx)=><li key={idx}>
                <h1>{key.name}</h1>
                <h2>{key.kind+" | "+key.region}</h2>
            </li>)}
        </ol>
    )
}