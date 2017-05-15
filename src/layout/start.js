'use strict'

module.exports = (state, css, ids) => `
	<!doctype html>
	<html lang="${ state.siteData.lang }">
		<head>

			<title>${ state.siteData.title }</title>

			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<meta name="description" content="${ state.siteData.description }">

			<!-- CSS -->
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,700">

			<!-- Glamor CSS -->
			<style>${ css }</style>

			<!-- Rehydration -->
			<script>
				window.__STATE__ = ${ JSON.stringify(state) }
				window.__GLAMOR__ = ${  JSON.stringify(ids) }
			</script>

		</head>
		<body>
`