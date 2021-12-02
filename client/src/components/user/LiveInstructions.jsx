import React from "react";

export default function LiveInstructions() {
	return (
		<div className="hero-body">
			<div className="column is-offset-2 is-two-thirds">
				<div className="box">
					<div className="title has-text-black">
						Streaming Instruction:
					</div>
					1. Download & Install OBS Studio from{" "}
					<a
						className="has-text-info"
						href="https://obsproject.com/download">
						here
					</a>
					<br />
					2. Open OBS Studio. Go to Tools &gt; Auto-Configuration
					Wizard <br />
					3. Select Optimize for streaming, Click Next <br />
					4. Select resolution and FPS of video, Click Next <br />
					5. Now in Stream Information, Select "Custom" as server and
					use these credentials and click Next <br />
					<div className="box">
						Server: <code>rtmp://13.127.14.191:1935/LearnX</code>
						<br />
						Stream key:{" "}
						<code>{process.env.REACT_APP_STREAM_KEY}</code>
					</div>
					6. Click yes to continue testing bandwidth, it'll
					automatically calibrate video quality for streaming. Once
					finished, hit Apply Settings. <br />
					7. Add input sources whichever you want to share using plus
					sign under input sources tab. <br /> 8. Hit "Start
					Streaming" to Go Live!
				</div>
			</div>
		</div>
	);
}
