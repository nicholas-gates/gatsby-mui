/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTalk = `mutation CreateTalk(
  $input: CreateTalkInput!
  $condition: ModelTalkConditionInput
) {
  createTalk(input: $input, condition: $condition) {
    id
    name
    description
    speakerName
  }
}
`;
export const updateTalk = `mutation UpdateTalk(
  $input: UpdateTalkInput!
  $condition: ModelTalkConditionInput
) {
  updateTalk(input: $input, condition: $condition) {
    id
    name
    description
    speakerName
  }
}
`;
export const deleteTalk = `mutation DeleteTalk(
  $input: DeleteTalkInput!
  $condition: ModelTalkConditionInput
) {
  deleteTalk(input: $input, condition: $condition) {
    id
    name
    description
    speakerName
  }
}
`;
