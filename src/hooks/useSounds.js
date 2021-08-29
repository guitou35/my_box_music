import {useState , useEffect, useRef} from "react";
import * as Tone from 'tone';

import kick from "assets/sounds/kick.wav";
import clap from "assets/sounds/clap.wav";
import crash from "assets/sounds/crash.wav";
import tamborine from "assets/sounds/tamborine.wav";


export default function useSounds() {
    const mySampler = useRef(null);

    const [isKickPlayed, isKickPlayedChange] = useState(false);
    const [isClapPlayed, isClapPlayedChange] = useState(false);
    const [isCrashPlayed, isCrashPlayedChange] = useState(false);
    const [isTamborinePlayed, isTamborinePlayedChange] = useState(false);

    useEffect (() => {
        const sampler = new Tone.Sampler({
                "C4": kick,
                "D#4": clap,
                "F#4": crash,
                "A4": tamborine,
            },
        ).toDestination();

        Tone.loaded().then(() => {
            mySampler.current = sampler;
        });
    }, []);

    function soundPlay(note){
        mySampler.current.triggerAttackRelease([note], 4);
    }

    function handleChangeSample(note, file){
        let fileURL = URL.createObjectURL(file);
        let buffer = new Tone.Buffer(fileURL);
        mySampler.current.add(note, buffer, ()=>
        alert("Sample successfully changed"));
    }

    function handleKeyDown({key}){
        console.log(key);
        switch (key){
            case "a":
                isKickPlayedChange(true);
                window.setTimeout(()=>{isKickPlayedChange(false);}, 300);
                soundPlay("C4");
                break;
            case "z":
                isClapPlayedChange(true);
                window.setTimeout(()=>{isClapPlayedChange(false);}, 300);
                soundPlay("D#4")
                break;
            case "e":
                isCrashPlayedChange(true);
                window.setTimeout(()=>{isCrashPlayedChange(false);}, 300);
                soundPlay("F#4")
                break;
            case "r":
                isTamborinePlayedChange(true);
                window.setTimeout(()=>{isTamborinePlayedChange(false);}, 300);
                soundPlay("A4");
                break;
            default:
                break;
        }
    }

    useEffect(()=> {
        window.addEventListener("keydown", handleKeyDown);
        return ()=>{
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, [])

    const buttonsList = [
        {
            soundPlay: () => soundPlay("C4"),
            isPlayed: isKickPlayed,
            id: "kick",
            handleChangeSample : (e)=> handleChangeSample("C4",e.target.files[0]),
        },
        {
            soundPlay: () => soundPlay("D#4"),
            isPlayed: isClapPlayed,
            id: "clap",
            handleChangeSample : (e)=> handleChangeSample("D#4",e.target.files[0]),
        },
        {
            soundPlay: () => soundPlay("F#4"),
            isPlayed: isCrashPlayed,
            id: "crash",
            handleChangeSample : (e)=> handleChangeSample("F#4",e.target.files[0]),
        },
        {
            soundPlay: () => soundPlay("A4"),
            isPlayed: isTamborinePlayed,
            id: "tamborine",
            handleChangeSample : (e)=> handleChangeSample("A4",e.target.files[0]),

        }
    ]

    return {buttonsList};
}