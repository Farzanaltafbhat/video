export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJhN2Y2MWI1YS03MWE3LTQxNjItYjAxOS1mMDEyN2FhMjI1OGUiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcwODUwNTMxNCwiZXhwIjoxNzExMDk3MzE0fQ.JHG-eoEAq2mwVWfQMmlBpmebGJe38SFLhVHzJoRf-j0";

// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  const { roomId } = await res.json();
  return roomId;
};
