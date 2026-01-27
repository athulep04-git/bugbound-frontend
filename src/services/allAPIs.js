import { serverURL } from "./serverURL";
import commonAPI from "./commonAPI";

// Function to call API endpoints
//1 Register User 
export const registerUserAPI = async (reqBody) => {
  return await commonAPI("POST", `${serverURL}/api/register`, reqBody, {});
};

//Login user


export const loginUserAPI = async (reqBody) => {
  return await commonAPI("POST", `${serverURL}/api/login`, reqBody, {});
};


//google login
export const googleUserLoginAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/googlelogin`,reqBody,{})
}

//add bug
export const addBugAPI = async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${serverURL}/api/addbug`,reqBody,reqHeader)
}

//all bugs
export const getAllBugsAPI = async(reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/getbugs`,{},reqHeader)
}

//get a bug details
export const getABugAPI = async(id, reqHeader) => {
  return await commonAPI("GET", `${serverURL}/api/getbug/${id}`, {}, reqHeader);
};

//add bounty
export const addBountyAPI = async (reqBody, reqHeader) => {
  return await commonAPI("POST", `${serverURL}/api/addbounty`, reqBody, reqHeader);
};

//get bounties
export const getAllBountiesAPI = async (reqHeader) => {
  return await commonAPI("GET", `${serverURL}/api/getbounties`, {}, reqHeader);
};

//get a bounty details 
export const getSingleBountyAPI = async (id, reqHeader) => {
  return await commonAPI("GET", `${serverURL}/api/getbounty/${id}`, {}, reqHeader);
};

//get all bug posts of user
export const getMyBugsAPI = async (reqHeader) => {
  return await commonAPI("GET", `${serverURL}/api/mybugs`, {}, reqHeader);
};
//get all posted bounties of user
export const getMyBountiesAPI = async (reqHeader) => {
  return await commonAPI("GET", `${serverURL}/api/mybounties`, {}, reqHeader);
};

//edit bug
export const editBugAPI = async (id, reqBody, reqHeader) => {
  return await commonAPI("PUT",`${serverURL}/api/editbug/${id}`,reqBody,reqHeader)
};