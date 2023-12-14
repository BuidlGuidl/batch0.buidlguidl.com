import { NextPage } from "next";
import Link from "next/link";
import { Address } from "~~/components/scaffold-eth";

const socials = [
    {
        link: "https://github.com/metoinside",
        title: "github",
    },
    {
        link: "https://twitter.com/metoinside",
        title: "twitter",
    },
    {
        link: "https://cr8product.com/metin",
        title: "website",
    },
];

const ProfileCard = () => {
    return (
        <section className="flex justify-center items-center p-20">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://framerusercontent.com/images/TqWJwUkHsDLhyTD0udSFRSzFEO0.png" alt="Album" /></figure>
                <div className="card-body">
                    <Address address="0x63191383EDbd8531C442868d87555f1EA2f6ad4E" size="3xl" />
                    <h2 className="card-title">Metin is here.</h2>
                    <p>I have been working on various projects as a freelance technical product manager on <Link className="btn btn-ghost btn-xs" href="https://upwork.com/fl/metoinside/">Upwork</Link> during the day but blockchain-focused developer on the night & weekends. Since the beginning of 2021, I've been a big fan of the ScaffoldETH and trying to learn & contribute in some ways.</p>
                    <div className="card-actions justify-end">
                        {socials.map(social => (
                            <Link className="btn btn-primary" target="_blank" href={social.link}>{social.title}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileCard;