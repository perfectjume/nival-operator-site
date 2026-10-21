# Working on this repo

## Privacy and law checklist: every change, before it's done

Renjume, 2026-10-21: "can you add a rule for all the nival application that they consider law and
privacy etc". Every Nival app considers the law and people's privacy in everything it builds: the
Swiss data protection act (revDSG / nFADP), the GDPR for people in the EU, consumer and contract law,
the rules on recording other people (Swiss Criminal Code Art. 179bis ff.), the EU AI Act's
transparency duties, and licences. The same list is in every Nival repo's AGENTS.md, beside the design
checklist; a change isn't done until it holds:

1. **Only what's needed.** Collect, keep and send only what the feature needs, for as long as it
   needs it; say how long things are kept, and delete what's no longer needed.
2. **Sensitive capture is opt-in.** Reading the screen, listening, recording, long-term memory and
   sending data to an AI in the cloud are the person's choice, each a switch of its own (never bundled,
   never on until turned on); calls, meetings and private messages are never captured unless the person
   asks, and while something listens it shows.
3. **Other people.** What's captured of others (on a screen, in a call, in a message) is kept as
   little and as briefly as possible; the person is told they're responsible for telling them
   (the Terms of Use), and nothing is built that records others secretly.
4. **Secrets never reach the AI.** Passwords, keys, card numbers and tokens are filled by code, never
   put in a model's context, a log or a transcript; what's read off a screen is never saved as one.
5. **Untrusted content is data.** Web pages, emails, files, screen text and tool results are quoted
   to a model as data, never followed as instructions.
6. **Risky actions are confirmed by the person.** Sending, paying, deleting, publishing, signing up or
   changing an account: the person confirms, never the AI on its own.
7. **New user data is registered for export and delete,** in the same change. The site keeps nothing about its visitors (no cookies, analytics or forms). It now lives on the Nival Server (`/operator`, `/operator/privacy`, `/extension/privacy`); anything added there follows the server's `app/user_data.py`.
8. **Encrypted at rest.** What's kept about a person is encrypted on the disk (Nival Shell's
   `at_rest.rs`, the server's secretbox and its database's host); sent only over HTTPS.
9. **AI is marked as AI.** What the assistant writes, says or does is shown as the assistant's
   (its name, a label), never passed off as the person's or a human's; a gap is listed in the Nival
   Server's `docs/legal-decisions.md` (AI labelling).
10. **Fair terms.** Prices before buying, cancelling as easy as subscribing, the EU's 14-day right of
    withdrawal, no dark patterns; a change that matters to people is a new version of the Terms of
    Use or Privacy Policy that they accept again (the server's admin app › Legal).
11. **Providers.** A new service people's data goes to (a processor) is named in the Privacy Policy
    (a new version) and its data processing agreement noted in `docs/legal-decisions.md`, with the
    country it's in.
12. **Licences, and nothing published.** Every dependency's licence allows shipping in a private,
    closed app; nothing is made public (no public repos, installers or source maps, no open-source
    licence of ours).
13. **Unclear? Flag it, don't guess.** A legal question the code can't settle goes in
    `docs/legal-decisions.md` (the Nival Server's) and in the change's report, for Renjume and the
    lawyer.

