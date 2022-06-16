import { css } from "@emotion/react";

export default function Task({ task }) {
	return (
		<>
			<div
				css={css`
					display: grid;
					gap: 1em;
					grid-template-columns: 25px 2fr 8ch 1fr 1fr 4ch;
					justify-content: center;
					align-items: center;
					width: 100%;
					padding: 0.5em 1em;
					border-bottom: 1px solid lightgrey;
				`}>
				<img src={task.company.pictureURL} width="24" height="24" />
				<div>{task.company.name}</div>
				<div>{task.selection.status}</div>
				<div>{task.selection.target}</div>
				<div>{task.details.jobType}</div>
				<div>{task.details.applicants}</div>
			</div>
		</>
	);
}
