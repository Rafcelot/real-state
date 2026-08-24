
import LogoIcon from "../logo-icon/LogoIcon"

export default function Logo() {
    

    return (
        <>
            <div className="logo">
                <LogoIcon className="logo__icon" />

                <div className="logo__text">
                    <span className="logo__name">ARCAD</span>
                    <span className="logo__tagline">Beyond Expectations</span>
                </div>
            </div>
        </>
    )
}

