// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const axios = require("axios");

const inviteMember = async (token, org, email) => {
  axios.defaults.headers.common["Accept"] = "application/vnd.github.v3+json";
  axios.defaults.headers.common["Authorization"] = `token ${token}`;
  const result = axios
    .post(`https://api.github.com/orgs/${org}/invitations`, { email: email })
    .then((response) => {
      console.log(
        response.status === 201
          ? "Send to " + email + ": Success"
          : "Send to " + email + ": Failed",
      );

      return response.data;
    })
    .catch((error) => console.log(error));
  return result;
};

export default async function invite(req, res) {
  const token = req.query.token;
  const org = req.query.org;
  const email = req.query.email;
  const result = await inviteMember(token, org, email);

  res.json(result);
}
