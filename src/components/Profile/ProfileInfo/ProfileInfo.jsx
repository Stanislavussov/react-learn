import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.profileImage}>
                <img
                        src="https://gray-wluc-prod.cdn.arcpublishing.com/resizer/L--Nt387d662hNpN2_GQnGRQ-O0=/1200x675/smart/cloudfront-us-east-1.images.arcpublishing.com/gray/CWX37DMGPZGUHHQOR5NB7LC5PM.png"/>
            </div>
            <div className={s.description}>
                Descr
            </div>
        </div>

    )
}

export default ProfileInfo;