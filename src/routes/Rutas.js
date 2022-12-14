import { Route, Routes } from "react-router-dom"

import {Home} from '../Home/Home'
import {Menu} from '../shared/Menu/Menu'
import {Historia} from '../Historia/Historia'
import {Integrantes} from '../Integrantes/Integrantes'
import { Music } from "../Music/Music"
import { Albums } from "../Albums/Albums"
import { Mercancia } from "../Mercancia/Mercancia"


export function Rutas (){
    return (
        <>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/historia" element={<Historia />} />
                <Route path="/integrantes" element={<Integrantes/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/albums" element={<Albums/>}/>
                <Route path="/mercancia" element={<Mercancia/>}/>
            </Routes>
        </>
        
      )
}