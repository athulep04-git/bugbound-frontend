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

//edit bounty

export const editBountyAPI = async (id, reqBody, reqHeader) => {
  return await commonAPI("PUT",`${serverURL}/api/editbounty/${id}`,reqBody,reqHeader);
};

//delete bug
export const deleteBugAPI = async (id, reqHeader) => {
  return await commonAPI("DELETE",`${serverURL}/api/deletebug/${id}`,{},reqHeader);
};
//delete bounty
export const deleteBountyAPI = async (id,reqHeader) => {
  return await commonAPI("DELETE",`${serverURL}/api/deletebounty/${id}`,{},reqHeader);
};

//getlogin user details
export const getUserProfileAPI = async (reqHeader)=> {
  return await commonAPI("GET",`${serverURL}/api/profile`,{},reqHeader);
};

//update login user
export const updateProfileAPI = async (reqBody, reqHeader) => {
  return await commonAPI("PUT", `${serverURL}/api/profile`, reqBody, reqHeader);
};

//get leaderboard
export const getLeaderboardAPI = async () => {
  return await commonAPI("GET", `${serverURL}/api/leaderboard`, {}, {});
};

// send proposal (debugger side – later)
export const sendProposalAPI = async (reqBody, reqHeader) => {
  return await commonAPI("POST", `${serverURL}/api/sendproposal`, reqBody, reqHeader);
};

// get proposals for a bug (owner side)
export const getBugProposalsAPI = async (bugId, reqHeader) => {
  return await commonAPI("GET", `${serverURL}/api/bugproposals/${bugId}`, {}, reqHeader);
};

// accept proposal
export const acceptProposalAPI = async (proposalId, reqHeader) => {
  return await commonAPI("PUT", `${serverURL}/api/acceptproposal/${proposalId}`, {}, reqHeader);
};
//fixworkspace
export const getFixWorkspaceAPI = async (bugId, reqHeader) => {
  return await commonAPI("GET",`${serverURL}/api/fixworkspace/${bugId}`,{},reqHeader);
};
//get ongoing tasks
export const getMyTasksAPI = async (reqHeader) => {
  return await commonAPI("GET",`${serverURL}/api/mytasks`,{},reqHeader);
};

//admin stats get
export const getAdminStatsAPI = async (reqHeader) => {
  return await commonAPI("GET",`${serverURL}/api/admin/stats`,{},reqHeader);
};
// get all users (admin)
export const getAllUsersAPI = async (reqHeader) => {
  return await commonAPI("GET",`${serverURL}/api/admin/users`,{},reqHeader);
};

// block user
export const blockUserAPI = async (id, reqHeader) => {
  return await commonAPI("PUT",`${serverURL}/api/admin/block/${id}`,{},reqHeader);
};

// unblock user
export const unblockUserAPI = async (id, reqHeader) => {
  return await commonAPI("PUT",`${serverURL}/api/admin/unblock/${id}`,{},reqHeader);
};

//fixworkspace mark
export const markBugFixedAPI = async (bugId, reqHeader) => {
  return await commonAPI("PUT",`${serverURL}/api/mark-fixed/${bugId}`,{},reqHeader);
};
//approve
export const approveBugAPI = async (bugId, reqHeader) => {
  return await commonAPI("PUT",`${serverURL}/api/approve-fix/${bugId}`,{},reqHeader);
};

//rating
export const submitRatingAPI = async (reqBody, reqHeader) => {
  return await commonAPI("POST",`${serverURL}/api/rate-debugger`,reqBody,reqHeader);
};
