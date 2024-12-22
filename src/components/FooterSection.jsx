import React from 'react'
import {resourcesLinks,communityLinks,platformLinks} from "../constants"
const FooterSection = () => {
  return (
    <footer className="border-t border-neutral-600 mt-20 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 ">
            <div>
                <h3 className="text-md font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                    {resourcesLinks.map((r,index)=>(
                        <li key={index}>
                        <a href={r.href} className="text-neutral-300 hover:text-white">{r.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-md font-semibold mb-4">Platform</h3>
                <ul className="space-y-2">
                    {platformLinks.map((p,index)=>(
                        <li key={index}>
                        <a href={p.href} className="text-neutral-300 hover:text-white">{p.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-md font-semibold mb-4">Community</h3>
                <ul className="space-y-2">
                    {communityLinks.map((c,index)=>(
                        <li key={index}>
                        <a href={c.href} className="text-neutral-300 hover:text-white">{c.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default FooterSection