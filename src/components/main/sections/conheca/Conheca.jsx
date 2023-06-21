

export default function Conheca() {
	return (
		<div>
			<div className={styles.video-container}>
      			<div className={styles.content-container}>
       			<h1 className={styles.title}>Título</h1>
        		<p className={styles.subtitle}>Subtítulo</p>
      	</div>

      <video className="video" src="/caminho/para/o/video.mp4" controls />

    	</div>
		</div>
	);
}
