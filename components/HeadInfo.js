import React from 'react';
import Head from 'next/head'

const HeadInfo = ({ title, keyword, contents }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta keyword={keyword}></meta>
			<meta contents={contents}></meta>
		</Head>
	)
}

HeadInfo.defaultProps ={
	title: `My Blog`,
	keyword: `Blog next js`,
	contents: `Blog next js`
}

export default HeadInfo;