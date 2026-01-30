import React from "react";
import {headers} from "next/headers";
import {redirect} from "next/navigation";

// LOCAL COMPONENT
import Header from "@/components/Header";

// THIRD PARTY PACKAGE
import {auth} from "@/lib/better-auth/auth";

export default async function Layout({children}: { children: React.ReactNode }){
    const session = await auth.api.getSession({headers: await headers()});

    if (!session?.user) redirect("/sign-in");

    const user = {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email
    };
    
    return (
        <main className="min-h-screen text-gray-400">
            {/* HEADER */}
            <Header user={user}/>
            <div className="container py-10">
                {children}
            </div>
        </main>
    );
}
