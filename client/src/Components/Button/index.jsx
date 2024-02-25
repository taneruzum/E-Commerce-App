import React from 'react'
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

export default function Button({ text, size, url, customClass }) {
    return (
        <NavLink to={url}>
            <button className={classNames(`${customClass} h-14  font-Roboto text-nowrap font-semibold px-7 py-3 rounded-xl`,
                {
                    " ": size === "small",
                    " ": size === "normal",
                    " ": size === "big",

                })} >{text}</button>
        </NavLink>
    )
}
