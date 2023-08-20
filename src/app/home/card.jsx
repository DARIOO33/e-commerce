"use client"
import Link from "next/link"
import { useState } from "react";

export default function Card({ data }) {

    return (
        <>
            <Link href={`product/${data?.id}`}>

                <div className="card-container w-64 h-64 bg-blue-300 m-auto mt-12">

                    <p className="text-center text-3xl font-extrabold">{data?.name}</p>
                </div>
            </Link >
        </>
    )
};
