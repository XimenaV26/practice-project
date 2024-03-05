import React from "react";
import { Image, Form } from "react-bootstrap";
import { FaUserGroup, FaLocationDot, FaSistrix } from "react-icons/fa6";
import "../assets/styles/profile.scss";

const profile = () => {
  const userData = {
    login: "dylanson25",
    id: 54459436,
    node_id: "MDQ6VXNlcjU0NDU5NDM2",
    avatar_url: "https://avatars.githubusercontent.com/u/54459436?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/dylanson25",
    html_url: "https://github.com/dylanson25",
    followers_url: "https://api.github.com/users/dylanson25/followers",
    following_url:
      "https://api.github.com/users/dylanson25/following{/other_user}",
    gists_url: "https://api.github.com/users/dylanson25/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/dylanson25/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/dylanson25/subscriptions",
    organizations_url: "https://api.github.com/users/dylanson25/orgs",
    repos_url: "https://api.github.com/users/dylanson25/repos",
    events_url: "https://api.github.com/users/dylanson25/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/dylanson25/received_events",
    type: "User",
    site_admin: false,
    name: "DYLAN VILLARREAL TOSCANO",
    company: null,
    blog: "https://www.linkedin.com/in/dylan-toscano/",
    location: "Arizona, mesa",
    email: null,
    hireable: null,
    bio: "I am a FRONTEND DEVELOPER, open to work, I have experience in Vue, React-Native with practical experience.\r\n@bright-coders  ",
    twitter_username: null,
    public_repos: 19,
    public_gists: 0,
    followers: 12,
    following: 10,
    created_at: "2019-08-24T00:25:24Z",
    updated_at: "2024-03-02T22:05:58Z",
  };

  return (
    <main className="profile-page container">
      <section className="w-100 mb-5">
        <div className="search mx-auto">
          <FaSistrix className="search-icon" size="15px" />
          <Form.Control
            className="rounded-pill w-100"
            type="text"
            placeholder="Username"
            size="lg"
          />
        </div>
      </section>
      <section className="profile-card p-1 p-md-3 text-center">
        <Image
          className="mb-2"
          src={userData.avatar_url}
          roundedCircle
          width={200}
        />
        <h2 className="fw-bolder">{userData.name}</h2>
        <p className="fst-italic fs-2 text-light-emphasis">{userData.login}</p>
        <p className="fs-4 ">{userData.bio}</p>
        <div className="follows-container fs-5">
          <FaUserGroup className="mt-1" />
          <p>
            <span className="fw-bold">{userData.followers} </span>
            <span className="text-light-emphasis">followers</span>
          </p>
          <span className="mx-1 fw-bold"> · </span>
          <p>
            <span className="fw-bold">{userData.following} </span>
            <span className="text-light-emphasis">following</span>
          </p>
        </div>
        <p className="text-light-emphasis fs-5 fst-italic">
          <FaLocationDot className="mb-2" /> {userData.location}
        </p>
      </section>
    </main>
  );
};

export default profile;
