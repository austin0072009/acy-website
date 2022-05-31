const gov = `
# Reference

ACY Finance is goverened and upgraded by ACY token holders, using three distinct components; the ACY token, governance module, and Timelock. Together, these contracts allow the community to propose, vote, and implement changes to the ACY protocol.

Proposals should be held on the ACY Finance Snapshot, in which the Core team can post proposals for the whole community to vote on; individual users may also start petitions for their proposals to be listed on the ACY Finance Snapshot for voting as well.

ACY adopts a straight voting policy for all proposals — note that different addresses are weighted differently according to the user’s contribution to and tokens held in the community. All proposals need to pass with a threshold of at least 60% to be considered binding.

The usage of DevFund wallet must be signed by the Finance team for a transaction to be carried out. A transaction must be approved by at least 60% of the Finance team members. 

Any addresses with more than 2M ACY delegated to it may propose governance actions, which contain finished, executable code. When a proposal is created, the community can cast their votes during a 3 day voting period. If a majority, and at least 1M votes are cast for the proposal, it is queued in the Timelock, and may be executed in a minimum of 3 days.

<br/>

# Process

Several governance venues are available to ACY Finance governance, each serving its own particular purpose.

## 1. Gov.acy.finance

gov.acy.finance is a Discourse-hosted forum for governance-related discussion. Community members must register for an account before sharing or liking posts. New members are required to enter 4 topics and read 15 posts over the course of 10 minutes before they are permitted to post themselves.

## 2. Snapshot

Snapshot is a simple voting interface that allows users to signal sentiment off-chain. Votes on snapshot are weighted by the number of ACY delegated to the address used to vote.

## 3. Governance Portal

The formal governance portal can be accessed directly through the ACY app interface. Votes are delegated and cast through the portal. 

Below we outline a preliminary draft for the ACY governance process, detailing exactly where these venues fit in. These processes are subject to change according to feedback from the ACY community.

## Phase 1: Temperature Check — Discourse

The purpose of the Temperature Check is to determine if there is sufficient will to make changes to the status quo. 

To create a Temperature Check: 

1. Ask a general, non-biased question to the community on gov.acy.finance about a potential change (example: "Should ACY governance add liquidity mining for XYZ token?"). Forum posts should be labeled as follows: "Temperature Check - [Your Title Here]". The forum post should include a link to the associated Snapshot poll. 
2. Voters use Snapshot to indicate their interest in bringing it forward to the next stage. Snapshot poll lengths should be set to 2 days. 

That's it! You've just started the process of gaining support for a proposal. At the end of the 2 days, a majority vote with a 25k ACY yes-vote threshold wins. 

If the Temperature check does not suggest a change from the status quo, the topic will be closed on the governance site. If the Temperature Check does suggest a change, proceed to Stage 2: Consensus Check.

## Phase 2: Consensus Check — Snapshot

The purpose of the Consensus Check is to establish formal discussion around a potential proposal. 

To create a Consensus Check:

1. Use feedback from the Temperature Check post and create a new Snapshot poll which covers the options which have gained support. This poll can either be binary or multiple choice but you are required to include the option "Make no change" or its equivalent. Set the poll duration to 5 days. 
2. Create a new topic in the Proposal Discussion category on gov.acy.finance titled "Consensus Check — [Your Title Here]". This will alert the community that this topic has already passed Temperature Check. Any topics beginning with Consensus Check that have not passed Temperature Check will immediately be removed by moderators. Make sure that the discussion thread links to the new Snapshot poll and the Temperature Check thread. 
3. Reach out to your network to build support for the proposal. Discuss the proposal and actively solicit delegates to vote on it. Be willing to respond to questions on the Consensus Check topic. Share your view point, although try to remain as impartial as possible. 

At the end of 5 days, whichever option has the majority of votes wins, and can be included in a governance proposal for Stage 3. A 50k ACY yes-vote quorum is required for the Consensus Check to pass. 

If the option "Make no change" wins, the Consensus Check topic will be closed by the moderators.

## Phase 3: Governance Proposal — Governance Portal

Phase 3 — Governance Proposal — is the final step of the governance process. The proposal should be based on the winning outcome from the Consensus Check and can consist of one or multiple actions, up to a maximum of 10 actions per proposal.

To create a Governance Proposal: 

1. Write the code for your proposal, which will be voted on through the Governance Portal. All proposed code should be audited by a professional auditor. This auditing process may be paid or reimbursed by the community treasury. 
2. Ensure that you have at least 2.5 million ACY delegated to your address in order to submit a proposal, or find someone who has enough ACY to meet the proposal threshold to propose on your behalf. 
3. Create a topic in the Proposal Discussion category on gov.acy.finance titled "Governance Proposal — [Your Title Here]" and link to any relevant Snapshot polls/discussion threads as well as the code audit report. Topics that begin with "Governance Proposal" that have not successfully passed through the Temperature Check and Consensus Check stages will be removed by moderators. 
4. Call the propose() function of the Governor Alpha to deploy your proposal.

Once the propose() function has been called, a seven day voting period will start. Ongoing discussion can take place in the gov.acy.finance forum. If the proposal passes successfully, a three-day timelock will follow before the proposed code is executed.

## Soft governance

The process described above lays out a structure for those wishing to host a formal vote around a particular issue. 

However, governing this system also requires a degree of "meta governance", discussions that inform the direction of and the implementation processes behind policy but which don't qualify as policy themselves. 

The community may discuss new ideas and strategies for governance — including changes to the three-step process outlined above — in the "Governance-Meta" category. On-chain voting is not necessary to make updates to off-chain processes.

<br/>

# Guide to Voting

This guide contains everything you need to start voting in ACY Governance.

In order to participate you will need:

- ACY Tokens
- ETH for transaction costs
- A browser with Metamask installed

The governance process begins in the Governance Forum, where you can find proposals under consideration, gather information about community sentiment, and engage with the community. 

Once a given proposal has made it through the proposal process and is ready for voting, it will appear in the ACY voting dashboard - where you can view all current and former ACY proposals. 

If a proposal is currently live for voting, it will say active next to the title. The proposal page will show all the necessary information, documentation, and discussion needed for a voter to make an informed decision.

Once a proposal has reached the voting stage it represents real, executable code which will alter the functionality of ACY Governance or anything under its jurisdiction - proper care should be taken to ensure that the code represented in the proposal has been audited and is found to be in good faith.

## Delegation

ACY is a tradable asset and functions like most other standard ERC20 tokens, except it has a deeper power as a voting mechanism. In order for ACY to be used as a vote, the owner must first go through the delegation process. Delegating ACY binds the voting power of your tokens to an address so it may be used to vote. This address could be yourself, or a trusted party who you believe will vote in the best interest of ACY Governance. 

A democratic consensus, in our process called “quorum”, is determined by the percentage of ACY tokens in favor of, or against, a proposal. 1% of all ACY must be cast in favor to submit a proposal, and 4% in order to pass a vote. 

To delegate your ACY tokens and enact their voting power, visit the ACY voting dashboard and click the button that says “Unlock Voting”. 

Once you click this button, you will see a screen that gives you the option to self delegate, or add a delegate address. If you wish to delegate your ACY voting power to your own address, click “Self Delegate”. 

When you click “Self Delegate”, a transaction will pop up in Metamask. If this doesn’t happen, double check that metamask is connected to app.acy.finance, turn off any popup blockers, and try again. Click confirm, and once the transaction has processed, you will see that the voting dashboard homepage has changed to show the number of votes you have, and “Delegated to: Self”. 

If you wish to delegate your voting power to another party, choose “Add Delegate” and enter the ethereum address of your chosen voting party.

An important note: much like voter registration in a larger democracy, for ACY to be used in a vote it must be delegated before both the voting period and the preceding proposal period. This means if you want your vote to count, you must delegate it in anticipation of any proposal you may be interested in. 

If you are unsure of how best to vote and are interested in delegating your ACY voting power to another party, you can visit the Delegation Pitch section of the governance forum. Here parties participating in ACY Governance pitch their platform and voting agenda for users to read and discuss.

## Voting

If you have successfully self delegated and there is an active proposal, you are ready to vote in ACY Governance. 

To cast your vote, navigate to the proposals page and click on an active proposal.

After reviewing the attached details and deciding your opinion, choose “Vote For”, or “Vote Against”. 

Once you’ve chosen, a window will pop up allowing you to execute the vote.

When you click to cast your vote, metamask will pop up asking you to confirm your transaction. Click “submit”, wait a bit, and check that the transaction has been confirmed. 

That’s it! Once your transaction has been confirmed, you will have cast your vote and participated in ACY Governance.

<br/>

# Governance Glossary

- ACY: An ERC-20 token that designates the weight of a user's voting rights. The more ACY a user has in their wallet, the more weight their delegation or vote on a proposal holds.
- Delegation: ACY holders cannot vote or create proposals until they delegate their voting rights to an address. Delegation can be given to one address at a time, including the holder's own address. Note that delegation does not lock tokens; it simply adds votes to the chosen delegation address.
- Proposal: A proposal is executable code that modifies the governance contract or treasury and how they work. In order to create a proposal, a user must have at least 0.25% of all ACY delegated to their address. Proposals are stored in the "proposals" mapping of the Governor smart contract. All proposals are subject to a 7-day voting period. If the proposer does not maintain their vote weight balance throughout the voting period, the proposal may be canceled by anyone.
- Quorum: In order for a vote to pass, it must achieve quorum of 4% of all ACY voting in the affirmative. The purpose of the quorum is to ensure that the only measures that pass have adequate voter participation.
- Voting: Users can vote for or against single proposals once they have voting rights delegated to their address. Votes can be cast while a proposal is in the "Active" state. Votes can be submitted immediately using "castVote" or submitted later with "castVoteBySig" (For more info on castVoteBySig and offline signatures, see EIP-712). If the majority of votes (and a 4% quorum of ACY) vote for a proposal, the proposal may be queued in the Timelock.
- Voting Period: Once a proposal has been put forward, ACY community members will have a seven-day period (the Voting Period) to cast their votes.
- Timelock: All governance and other administrative actions are required to sit in the Timelock for a minimum of 3 days, after which they can be implemented.

<br/>

# Adversarial Circumstances

This document explores some adversarial circumstances which ACY Governance may encounter in the future. Its goal is to help those interested in ACY Governance understand the reasoning behind some of its design, its limitations, and potential avenues for growth. 

## Scenario 1

A good faith proposal is brought to vote but is found to have an exploitable edge case. A bad faith actor uses a series of DeFi leveraging strategies to quickly buy enough ACY during the voting period to sway the vote in favor of the proposal, passing it and exploiting the vulnerability.

### Circumvention

ACY voting power must be delegated to an address either entirely before a proposal has been submitted or during the proposal delay period. For now, the proposal delay is set to one block, which is about 15 seconds. A proposal delay of one block leaves no opportunity for a third party to find an exploitable edge case and opportunistically purchase ACY, self delegate and sway the vote. 

In the future, ACY Governance may vote to increase the proposal delay. While there are obvious benefits to an increased proposal delay, It may introduce some potential adverse outcomes such as opportunistic edge case exploitation.

## Scenario 2

A bad faith proposal is crafted and submitted to vote, which is unambiguously not in the best interest of ACY Governance. Multiple parties collude ahead of time to corner the ACY market to force the proposal through, gain access to the ACY reserves, and drain the funds. 

### Circumvention

Since ACY is a freely tradable asset, anyone can attempt a governance takeover via market buying. That said, to force-pass a bad faith vote would require a minimum of 10 million ACY. If not outright impossible, this amount would be prohibitively expensive and likely cost more when accounting for price fluctuation than the net gain from the attack. 

If a group somehow achieved a bad faith takeover, Timelock's delay would give affected agents time to withdraw their assets from the protocol. This would also be an opportunity to fork the protocol, a path that would likely be taken by the remaining good-faith actors.

## Scenario 3

A single party uses a flash loan to push through a proposal, potentially creating a pseudo-DDOS attack by spamming governance with proposals and preventing effective use. 

### Circumvention

A delegated balance of 2 million ACY is required to submit a vote, but the balance check is set exactly one block in the past. This prevents any flash loan proposals from being created, as flash loans cannot execute outside of a single block. 

The proposer must also maintain a minimum balance of 2 million ACY throughout the voting period, or anyone may cancel the proposal. This balance maintenance check prevents many highly leveraged proposal techniques that may span several blocks.

## Scenario 4

A bad faith proposal is created, which will genuinely incentivize bad faith voting.

Exmaple: "The treasury will be drained. Any votes in favor will be sent the balance of the treasury. Any votes opposed will be locked from the funds of the treasury." 

### Circumvention

No mechanism explicitly prevents this type of scenario, but market forces disincentivize it. 

Because the treasury is comprised of ACY tokens exclusively, the market would react appropriately if a vote were to pass that would jeopardize the economic viability of ACY Governance and the ACY token. By the time the vote would pass, ACY's price would have fallen so low as to make the attack fruitless.

ACY acting as the only asset of the governance treasury disincentivizes this form of bad faith voting. ACY Governance may choose in the future to diversify governance assets. While there are many benefits to this path, some fringe possibilities such as incentivized bad faith voting may appear.
`;
export default gov;
