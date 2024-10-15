import { sleep } from "../lib/helpers.ts";

export type Invite = {
  id: string;
};

class CallInvitesApi {
  static async activeInvites(): Promise<Invite[]> {
    console.log("Fetching invites...");
    await sleep(2000);
    return [{ id: "1" }, { id: "2" }, { id: "3" }];
  }
}

export default CallInvitesApi;
