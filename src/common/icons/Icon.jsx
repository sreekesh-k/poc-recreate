import React from "react";

function Icon({ name = "home", size = 18, color = "currentColor" }) {
  const icons = {
    Home: (
      <path
        fillRule="evenodd"
        transform="translate(-436 -1891.754)"
        d="M461,1905.5a1.169,1.169,0,0,1-1.969.855l0,0-10.5-10.5h0l-.03-.029h0l-10.5,10.5h0a1.171,1.171,0,1,1-1.634-1.679l11.3-11.3a1.168,1.168,0,0,1,.845-.36h.072l.053,0h0a1.17,1.17,0,0,1,.729.366h0l4.611,4.611v-1.077a1.172,1.172,0,0,1,2.344,0v3.421l4.373,4.373,0,0A1.164,1.164,0,0,1,461,1905.5Zm-2.344,1.953v8.2a1.172,1.172,0,0,1-1.172,1.172h-2.344v-9.375h-4.687v9.375H439.516a1.172,1.172,0,0,1-1.172-1.172v-8.2L448.5,1897.3Zm-12.109,0h-4.687v4.688h4.688Z"
      />
    ),
    Dashboards: (
      <path
        d="M233.966,2027h-6.9a1.034,1.034,0,0,1-1.034-1.034v-6.9a1.034,1.034,0,0,1,1.034-1.034h6.9a1.034,1.034,0,0,1,1.034,1.034v6.9A1.034,1.034,0,0,1,233.966,2027Zm0-11.034h-6.9a1.034,1.034,0,0,1-1.034-1.035v-6.9a1.034,1.034,0,0,1,1.034-1.034h6.9a1.034,1.034,0,0,1,1.034,1.034v6.9A1.034,1.034,0,0,1,233.966,2015.965ZM222.931,2027h-6.9a1.034,1.034,0,0,1-1.034-1.034v-6.9a1.034,1.034,0,0,1,1.034-1.034h6.9a1.034,1.034,0,0,1,1.034,1.034v6.9A1.034,1.034,0,0,1,222.931,2027Zm0-11.034h-6.9a1.034,1.034,0,0,1-1.034-1.035v-6.9a1.034,1.034,0,0,1,1.034-1.034h6.9a1.034,1.034,0,0,1,1.034,1.034v6.9A1.034,1.034,0,0,1,222.931,2015.965Z"
        transform="translate(-212 -2003.748)"
        fillRule="evenodd"
      />
    ),
    ActionCenter: (
      <path
        d="M2083.5,435a11.5,11.5,0,1,1,11.5-11.5A11.5,11.5,0,0,1,2083.5,435Zm0-20.844a9.344,9.344,0,1,0,9.344,9.344A9.344,9.344,0,0,0,2083.5,414.156Zm4.672,10.422H2083.5a1.078,1.078,0,0,1-1.078-1.078v-6.469a1.078,1.078,0,0,1,2.156,0v5.391h3.594a1.078,1.078,0,0,1,0,2.156Z"
        transform="translate(-2071 -410.75)"
        fillRule="evenodd"
      />
    ),
    TemplateHub: (
      <path
        d="M235.147,1127.9H222.092a1.031,1.031,0,0,1-1.031-1.031v-17.865a1.031,1.031,0,0,1,1.031-1.031h5.5v5.841a2.064,2.064,0,0,0,2.061,2.066h6.528v10.989A1.031,1.031,0,0,1,235.147,1127.9Zm-5.5-13.052a1.032,1.032,0,0,1-1.031-1.033v-5.854l7.558,6.886H229.65Zm-6.813,14.083h11.279a1.031,1.031,0,0,1-1.031,1.031H221.061A2.061,2.061,0,0,1,219,1127.9v-16.834a1.031,1.031,0,0,1,1.031-1.031v16.834a2.061,2.061,0,0,0,2.061,2.061Z"
        transform="translate(-215 -1106.027)"
        fillRule="evenodd"
      />
    ),
    Applications: (
      <path
        d="M459.167,2355.471h0l-10.8,4.469-.005,0,0,0h0a1.112,1.112,0,0,1-.855,0h0l0,0,0,0-10.8-4.469h0a1.118,1.118,0,1,1,.855-2.066h0l.005,0,0,0,10.373,4.292,10.373-4.292.005,0,0,0h0a1.118,1.118,0,1,1,.855,2.066Zm0-4.846h0l-10.8,4.469-.005,0,0,0h0a1.109,1.109,0,0,1-.855,0h0l0,0,0,0-10.8-4.469h0a1.117,1.117,0,0,1,0-2.066h0l10.8-4.469,0,0,0,0h0a1.112,1.112,0,0,1,.855,0h0l0,0,.005,0,10.8,4.469h0a1.118,1.118,0,0,1,0,2.066Zm-22.048,7.541a1.114,1.114,0,0,1,.428.085h0l.005,0,0,0,10.373,4.292,10.373-4.292.005,0,0,0h0a1.118,1.118,0,1,1,.855,2.066h0l-10.8,4.469-.005,0,0,0h0a1.112,1.112,0,0,1-.855,0h0l0,0,0,0-10.8-4.469h0a1.118,1.118,0,0,1,.427-2.151Z"
        transform="translate(-435 -2341)"
        fillRule="evenodd"
      />
    ),
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name] || null}
    </svg>
  );
}

export default Icon;
