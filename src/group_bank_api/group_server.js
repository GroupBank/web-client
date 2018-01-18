import * as settings from '@/settings';
import * as common from '@/group_bank_api/common';
import * as crypto from '@/crypto';

const url = settings.group_server_url;

export async function invite(self_pk, group_id, invitee_id, invitee_email) {
    const self_id = crypto.public_key_from_private_key(self_pk);

    const json_string = await JSON.stringify({
        group_id: group_id,
        invite_id: invitee_id,
        invitee_email: invitee_email
    });

    const signature = crypto.sign(self_pk, json_string);
    return await json_request(url, self_id, signature, json_string);
};