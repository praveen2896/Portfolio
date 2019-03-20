import React, { useState, useEffect } from "react"

const count = new Date("Jul 28, 1996 15:37:25").getTime()

const Age = () => {
  const [Days, setDays] = useState(0)
  const [Years, setYears] = useState(0)
  const [Hours, setHours] = useState(0)
  const [Minutes, setMinutes] = useState(0)
  const [Seconds, setSeconds] = useState(0)
  useEffect(() => {
    const birth = setInterval(() => {
      const today = new Date().getTime()
      const distance = today - count
      var days = Math.floor(distance / (1000 * 60 * 60 * 24))
      var years = Math.floor(days / 365)
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      var seconds = Math.floor((distance % (1000 * 60)) / 1000)
      setDays(days)
      setYears(years)
      setHours(hours)
      setMinutes(minutes)
      setSeconds(seconds)
    }, 1000)
    return () => clearInterval(birth)
  })
  return (
    <div>
      I am {Years} years {Days} days {Hours} hours {Minutes} minutes {Seconds}{" "}
      seconds old
    </div>
  )
}

export default Age
