import clsx from "clsx";

function Card({

    children,

    className = "",

}) {

    return (

        <div

            className={clsx(

                `
                bg-surface
                border
                border-border
                rounded-[var(--radius-lg)]
                shadow-sm
                `,

                className

            )}

        >

            {children}

        </div>

    );

}

function Header({

    children,

    className = "",

}) {

    return (

        <div

            className={clsx(

                "px-6 py-5 border-b border-border",

                className

            )}

        >

            {children}

        </div>

    );

}

function Body({

    children,

    className = "",

}) {

    return (

        <div

            className={clsx(

                "p-6",

                className

            )}

        >

            {children}

        </div>

    );

}

function Footer({

    children,

    className = "",

}) {

    return (

        <div

            className={clsx(

                "px-6 py-4 border-t border-border",

                className

            )}

        >

            {children}

        </div>

    );

}

Card.Header = Header;

Card.Body = Body;

Card.Footer = Footer;

export default Card;