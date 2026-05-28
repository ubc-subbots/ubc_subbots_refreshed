import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAnchor, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

import './Members.css';


interface MediaTypes {
    linkedIn: string;
    instagram: string;
    github: string;
    email: string;
}

interface Member {
    team: string;
    firstName: string;
    lastName: string;
    role: string;
    image: string;
    media: MediaTypes;
}

function Members() {

    const [members, setMembers] = useState<Member[]>([]);
    const teamSize = members && members.length;
    
    useEffect(() => {
        fetch('/data/members.json')
        .then((res) => res.json())
        .then(setMembers)
        .catch(console.error);
    }, []);


    const membersByTeam: Record<string, Member[]> = members.reduce(
        (acc, member) => {
            if (!acc[member.team]) acc[member.team] = [];
            acc[member.team].push(member);
            return acc;
        },
        {} as Record<string, Member[]>
    );



    return (
        <section className="Members">

            <section className="title-card">

                {/* <div className="header">
                    <h1>MEMBERS</h1>
                </div> */}

                <div className="content">
                    <img src="/images/team_photo.jpg" />
                    <div className="img-mask" />
                    <h2>Meet <strong>The Team</strong></h2>
                    <p className="content-text-large">
                        United by curiosity and driven by purpose, our
                        <br />
                        {teamSize}+ team members bring unique skills and shared passion to every step of the journey!
                    </p>
                </div>
                
            </section>

            <div className="legend">
                <FontAwesomeIcon icon={faAnchor} /> = Team Lead
            </div>


            {Object.entries(membersByTeam).map(([team, teamMembers]) => (
                <MemberFactory key={team} team={team} members={teamMembers} />
            ))}


        </section>
    );
}


interface MemberItemProps {
    member: Member;
}

function MemberItem({ member }: MemberItemProps) {

    function isLead(role: string) {
        return role === "lead";
    }

    const links = [
        { href: member.media.linkedIn, icon: faLinkedin, label: "LinkedIn" },
        { href: member.media.instagram, icon: faInstagram, label: "Instagram" },
        { href: member.media.github, icon: faGithub, label: "GitHub" },
        { href: member.media.email ? `mailto:${member.media.email}` : "", icon: faEnvelope, label: "Email" },

    ].filter(link => link.href !== ""); // Filter out empty links

    return (
        <div className="member-item">
            <div className="member-image-wrapper">
                <img src={member.image !== "" ? `/images/members/${member.image}` : '/images/members/placeholder.png'} />
                {links.length > 0 && (
                    <div className="member-overlay">
                        {links.map(link => (
                            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                                <FontAwesomeIcon icon={link.icon} />
                            </a>
                        ))}
                    </div>
                )}
            </div>
            <h4>
                {member.firstName}
                <br />
                <span>{member.lastName}</span>
            </h4>
            {isLead(member.role) ? <FontAwesomeIcon icon={faAnchor} /> : <></>}
        </div>
    );
}


interface MemberFactoryProps {
    team: string;
    members: MemberItemProps["member"][];
}

function MemberFactory({ team, members }: MemberFactoryProps) {

    function isLead(role: string) {
        return role === "lead";
    }

    // Helper function to sort members within a team
    function sortMembers(members: Member[]) {
        return members.sort((a, b) => {
            // 1. Leads first, then members
            const aIsLead = isLead(a.role);
            const bIsLead = isLead(b.role);
            if (aIsLead && !bIsLead) return -1;
            if (!aIsLead && bIsLead) return 1;

            // 2. Members with images first
            const aHasImage = a.image && a.image !== '';
            const bHasImage = b.image && b.image !== '';
            if (aHasImage && !bHasImage) return -1;
            if (!aHasImage && bHasImage) return 1;

            // 3. Alphabetically by last name
            return a.lastName.localeCompare(b.lastName);
        });
    };



    return (
        <section className="factorygen-member-section">
            <section className="factorygen-member-section-inner">

                <div className="header">
                    <img src="/images/pulling_steelhead_out_of_water.jpg" />
                    <div className="img-mask" />
                    <h1>{team.toUpperCase()}</h1>

                    <div className="member-count">
                        <h1>{members.length}</h1>
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                </div>

                <div className="content">
                    {sortMembers(members).map((m) => (
                        <MemberItem member={m} />
                    ))}
                </div>

            </section>
        </section>
    );
}



export default Members;