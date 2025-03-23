// function computeDepth(
// 	node:
// 		| BlockOpeningBracketConcreteSyntaxTreeNode
// 		| BlockClosingBracketConcreteSyntaxTreeNode
// 		| BlockConcreteSyntaxTreeNode
// 		| BlockContentConcreteSyntaxTreeNode
// 		| FunctionBodyConcreteSyntaxTreeNode
// 		| FunctionCallConcreteSyntaxTreeNode
// 		| FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode
// 		| FunctionCallKnownSegmentConcreteSyntaxTreeNode
// 		| FunctionCallKnownSegmentContentConcreteSyntaxTreeNode
// 		| FunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode
// 		| FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode
// 		| FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode
// 		| FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode
// 		| FunctionCallUnknownSegmentConcreteSyntaxTreeNode
// 		| FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode
// 		| FunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode
// 		| FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode
// 		| FunctionCallWordSegmentConcreteSyntaxTreeNode
// 		| FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode
// 		| FunctionConcreteSyntaxTreeNode
// 		| FunctionHeaderConcreteSyntaxTreeNode
// 		| FunctionHeaderKnownSegmentConcreteSyntaxTreeNode
// 		| FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode
// 		| FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode
// 		| FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode
// 		| FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode
// 		| FunctionHeaderWordSegmentConcreteSyntaxTreeNode
// 		| FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode
// 		| FunctionsConcreteSyntaxTreeNode
// 		| FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode
// 		| SourceFileContentConcreteSyntaxTreeNode
// 		| WhitespaceConcreteSyntaxTreeNode
// 		| WhitespaceSegmentConcreteSyntaxTreeNode
// 		| WhitespaceSegmentsConcreteSyntaxTreeNode
// 		| StatementsConcreteSyntaxTreeNode
// 		| IdentifierConcreteSyntaxTreeNode
// 		| FunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode
// 		| FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode
// 		| FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode
// 		| FunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode
// 		| FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode
// 		| FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode
// 		| StatementsRestStatementsConcreteSyntaxTreeNode
// 		| IdentifierSegmentsConcreteSyntaxTreeNode
// 		| OperatorConcreteSyntaxTreeNode
// 		| IdentifierSegmentConcreteSyntaxTreeNode
// 		| null,
// ): number {
// 	if (node === null) {
// 		return 0;
// 	}
// 	switch (node.typeName) {
// 		case blockConcreteSyntaxTreeNodeTypeName:
// 		case blockContentConcreteSyntaxTreeNodeTypeName:
// 		case functionBodyConcreteSyntaxTreeNodeTypeName:
// 		case functionCallConcreteSyntaxTreeNodeTypeName:
// 		case functionCallKnownSegmentConcreteSyntaxTreeNodeTypeName:
// 		case functionCallKnownSegmentContentConcreteSyntaxTreeNodeTypeName:
// 		case functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeTypeName:
// 		case functionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeTypeName:
// 		case functionCallUnknownSegmentConcreteSyntaxTreeNodeTypeName:
// 		case functionCallUnknownSegmentContentConcreteSyntaxTreeNodeTypeName:
// 		case functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeTypeName:
// 		case functionCallWordSegmentConcreteSyntaxTreeNodeTypeName:
// 		case functionCallWordStartingSegmentsConcreteSyntaxTreeNodeTypeName:
// 		case functionConcreteSyntaxTreeNodeTypeName:
// 		case functionHeaderConcreteSyntaxTreeNodeTypeName:
// 		case functionHeaderKnownSegmentConcreteSyntaxTreeNodeTypeName:
// 		case functionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeTypeName:
// 		case functionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeTypeName:
// 		case functionHeaderUnknownSegmentConcreteSyntaxTreeNodeTypeName:
// 		case functionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeTypeName:
// 		case functionHeaderWordSegmentConcreteSyntaxTreeNodeTypeName:
// 		case functionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeTypeName:
// 		case functionsConcreteSyntaxTreeNodeTypeName:
// 		case functionsSeparatedRestFunctionsConcreteSyntaxTreeNodeTypeName:
// 		case sourceFileContentConcreteSyntaxTreeNodeTypeName:
// 		case whitespaceConcreteSyntaxTreeNodeTypeName:
// 		case whitespaceSegmentsConcreteSyntaxTreeNodeTypeName:
// 		case identifierConcreteSyntaxTreeNodeTypeName:
// 		case statementsConcreteSyntaxTreeNodeTypeName:
// 		case functionHeaderUnknownSegmentContentConcreteSyntaxTreeNodeTypeName:
// 		case statementsRestStatementsConcreteSyntaxTreeNodeTypeName:
// 		case identifierSegmentsConcreteSyntaxTreeNodeTypeName: {
// 			const childDepths: readonly number[] = node.children.map(computeDepth);
// 			const maximalChildDepth = Math.max(...childDepths);
// 			return maximalChildDepth + 1;
// 		}
// 		case blockOpeningBracketConcreteSyntaxTreeNodeTypeName:
// 		case blockClosingBracketConcreteSyntaxTreeNodeTypeName:
// 		case functionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNodeTypeName:
// 		case functionCallKnownSegmentClosingBracketConcreteSyntaxTreeNodeTypeName:
// 		case functionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNodeTypeName:
// 		case functionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNodeTypeName:
// 		case whitespaceSegmentConcreteSyntaxTreeNodeTypeName:
// 		case functionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNodeTypeName:
// 		case functionHeaderKnownSegmentContentConcreteSyntaxTreeNodeTypeName:
// 		case functionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNodeTypeName:
// 		case operatorConcreteSyntaxTreeNodeTypeName:
// 		case identifierSegmentConcreteSyntaxTreeNodeTypeName:
// 		case functionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNodeTypeName:
// 		case functionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNodeTypeName: {
// 			return 1;
// 		}
// 	}
// }
