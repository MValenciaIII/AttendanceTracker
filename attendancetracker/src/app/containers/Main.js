'use client'
import InputAbsent from "../components/InputAbsent"
import StatDisplay from "../components/StatDisplay"
import React from "react"
import { gql, useQuery } from "@apollo/client"
import client from '../static/api'

const GET_STUDENTS = gql`
query MyQuery {
  students {
    fname
    id
    lname
    nocalls
    tardy
    absences
    datesMissed
  }
}
`;

function Main() {
    const { loading, error, data } = useQuery(GET_STUDENTS, {client});

    

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return(
        <div className="container">
            <div className="grid grid-cols-1 gap-4">
                    <InputAbsent />
                    <StatDisplay apiData={data.students}  />
            </div>
        </div>
    )
}


export default Main