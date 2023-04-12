'use client'
import { useState } from "react";

interface DropdwonProps extends React.HTMLAttributes<HTMLDivElement> {}

const Dropdwon = ({ children, className }: DropdwonProps) => {
    const [toggle, setToggle] = useState<boolean>(false)
    const [ddChildToggle, setDdChildToggle] = useState<boolean>(false)
    const display = "dd-show";
    return (
        <div className={`dropdown text-black`}>
            <button onClick={() => setToggle(!toggle)}>Dropdwon</button>
            <div className={toggle ? 'dd-items' : 'dd-hide'}>
                <a href="#">Item 1</a>
                <a href="#">System</a>
                <div className="dd-childGrp">
                    <button onClick={() => setDdChildToggle(!ddChildToggle)}>System</button>
                    <div className={ddChildToggle ? 'dd-left' : 'dd-hide'}>
                        <a href="#">Dark mode</a>
                        <a href="#">Light mode</a>
                        <a href="#">Light mode</a>
                        <a href="#">Light mode</a>
                        <a href="#">Light mode</a>
                    </div>
                </div>
                <a href="#">Dark mode</a>
                <a href="#">Light mode</a>
            </div>
        </div>
    )
};
export default Dropdwon;
