import type {OperatorCharacter} from "../../../../characters/operator/OperatorCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import type {StatementsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements/StatementsConcreteSyntaxTreeNode.ts";
import {StatementsRestStatementsBeforeOperatorParser} from "../statements-rest-statements-before-operator/StatementsRestStatementsBeforeOperatorParser.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteSyntaxTreeNode.ts";
import type {StatementsRestStatementsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements-rest-statements/StatementsRestStatementsConcreteSyntaxTreeNode.ts";
import {createOperatorConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/operator/createOperatorConcreteSyntaxTreeNode.ts";
import type {Index} from "../../../../concrete-syntax-tree/index/Index.ts";
import {createWhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/createWhitespaceConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import type {BlockClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-closing-bracket/BlockClosingBracketConcreteSyntaxTreeNode.ts";
import {createBlockContentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-content/createBlockContentConcreteSyntaxTreeNode.ts";
import {createBlockOpeningBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-opening-bracket/createBlockOpeningBracketConcreteSyntaxTreeNode.ts";
import {createBlockConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block/createBlockConcreteSyntaxTreeNode.ts";
import {createFunctionBodyConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-body/createFunctionBodyConcreteSyntaxTreeNode.ts";
import {createStatementsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements/createStatementsConcreteSyntaxTreeNode.ts";
import {FunctionHeaderParser} from "../function-header/FunctionHeaderParser.ts";
import {StatementsRestStatementsAfterOperatorParser} from "../statements-rest-statements-after-operator/StatementsRestStatementsAfterOperatorParser.ts";
import type {OpeningCurlyBracketCharacter} from "../../../../characters/opening-curly-bracket/OpeningCurlyBracketCharacter.ts";
export class StatementsRestStatementsAfterOperatorWhitespaceSegmentsParser implements Parser {
	private readonly statementsRestStatementsAfterOperatorWhitespaceSegments: WhitespaceSegmentsConcreteSyntaxTreeNode;
	private readonly statementsRestStatementsStatements: StatementsConcreteSyntaxTreeNode;
	private readonly blockContentFinalWhitespace: WhitespaceConcreteSyntaxTreeNode | null;
	private readonly blockContentEndingIndex: Index;
	private readonly blockClosingBracket: BlockClosingBracketConcreteSyntaxTreeNode;
	private readonly blockEndingIndex: Index;
	private readonly blockStack: readonly (readonly [
		statementsRestStatements: StatementsRestStatementsConcreteSyntaxTreeNode | null,
		statementsEndingIndex: Index,
		finalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
		contentEndingIndex: Index,
		closingBracket: BlockClosingBracketConcreteSyntaxTreeNode,
		endingIndex: Index,
	])[];
	private readonly functionsRestFunctions:
		| FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode
		| null
		| FunctionsConcreteSyntaxTreeNode;
	private readonly sourceFileContentFinalWhitespace: WhitespaceConcreteSyntaxTreeNode | null;
	public constructor(
		statementsRestStatementsAfterOperatorWhitespaceSegmentsStartingIndex: Index,
		statementsRestStatementsAfterOperatorWhitespaceSegments: WhitespaceSegmentsConcreteSyntaxTreeNode,
		statementsRestStatementsAfterOperatorWhitespaceEndingIndex: Index,
		statementsRestStatementsStatementsStartingIndex: Index,
		statementsRestStatementsStatements: StatementsConcreteSyntaxTreeNode,
		statementsEndingIndex: Index,
		blockContentFinalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
		blockContentEndingIndex: Index,
		blockClosingBracket: BlockClosingBracketConcreteSyntaxTreeNode,
		blockEndingIndex: Index,
		blockStack: readonly (readonly [
			statementsRestStatements: StatementsRestStatementsConcreteSyntaxTreeNode | null,
			statementsEndingIndex: Index,
			finalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
			contentEndingIndex: Index,
			closingBracket: BlockClosingBracketConcreteSyntaxTreeNode,
			endingIndex: Index,
		])[],
		functionBodyEndingIndex: Index,
		functionEndingIndex: Index,
		functionsRestFunctions:
			| FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode
			| null
			| FunctionsConcreteSyntaxTreeNode,
		functionsEndingIndex: Index,
		sourceFileContentFinalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
		sourceFileContentEndingIndex: Index,
	) {
		this.statementsRestStatementsAfterOperatorWhitespaceSegmentsStartingIndex =
			statementsRestStatementsAfterOperatorWhitespaceSegmentsStartingIndex;
		this.statementsRestStatementsAfterOperatorWhitespaceSegments =
			statementsRestStatementsAfterOperatorWhitespaceSegments;
		this.statementsRestStatementsAfterOperatorWhitespaceEndingIndex =
			statementsRestStatementsAfterOperatorWhitespaceEndingIndex;
		this.statementsRestStatementsStatementsStartingIndex =
			statementsRestStatementsStatementsStartingIndex;
		this.statementsRestStatementsStatements = statementsRestStatementsStatements;
		this.statementsEndingIndex = statementsEndingIndex;
		this.blockContentFinalWhitespace = blockContentFinalWhitespace;
		this.blockContentEndingIndex = blockContentEndingIndex;
		this.blockClosingBracket = blockClosingBracket;
		this.blockEndingIndex = blockEndingIndex;
		this.blockStack = blockStack;
		this.functionBodyEndingIndex = functionBodyEndingIndex;
		this.functionEndingIndex = functionEndingIndex;
		this.functionsRestFunctions = functionsRestFunctions;
		this.functionsEndingIndex = functionsEndingIndex;
		this.sourceFileContentFinalWhitespace = sourceFileContentFinalWhitespace;
		this.sourceFileContentEndingIndex = sourceFileContentEndingIndex;
	}
	private readonly statementsRestStatementsStatementsStartingIndex: Index;
	private readonly statementsRestStatementsAfterOperatorWhitespaceEndingIndex: Index;
	private readonly statementsRestStatementsAfterOperatorWhitespaceSegmentsStartingIndex: Index;
	private readonly statementsEndingIndex: Index;
	private readonly functionsEndingIndex: Index;
	private readonly sourceFileContentEndingIndex: Index;
	private readonly functionBodyEndingIndex: Index;
	private readonly functionEndingIndex: Index;
	public parseWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): StatementsRestStatementsAfterOperatorWhitespaceSegmentsParser {
		const newStatementsRestStatementsAfterOperatorWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const newStatementsRestStatementsAfterOperatorWhitespaceSegments: WhitespaceSegmentsConcreteSyntaxTreeNode =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				newStatementsRestStatementsAfterOperatorWhitespaceSegmentsFirstSegment,
				this.statementsRestStatementsAfterOperatorWhitespaceSegments,
				{
					starting: index,
					ending: this.statementsRestStatementsAfterOperatorWhitespaceEndingIndex,
				},
			);
		const statementsRestStatementsAfterOperatorWhitespaceSegmentsParser =
			new StatementsRestStatementsAfterOperatorWhitespaceSegmentsParser(
				index,
				newStatementsRestStatementsAfterOperatorWhitespaceSegments,
				this.statementsRestStatementsAfterOperatorWhitespaceEndingIndex,
				this.statementsRestStatementsStatementsStartingIndex,
				this.statementsRestStatementsStatements,
				this.statementsEndingIndex,
				this.blockContentFinalWhitespace,
				this.blockContentEndingIndex,
				this.blockClosingBracket,
				this.blockEndingIndex,
				this.blockStack,
				this.functionBodyEndingIndex,
				this.functionEndingIndex,
				this.functionsRestFunctions,
				this.functionsEndingIndex,
				this.sourceFileContentFinalWhitespace,
				this.sourceFileContentEndingIndex,
			);
		return statementsRestStatementsAfterOperatorWhitespaceSegmentsParser;
	}
	public parseOpeningSquareBracket(): never {
		throw new Error("Not implemented.");
	}
	public parseClosingSquareBracket(): never {
		throw new Error("Not implemented.");
	}
	public parseOpeningCurlyBracket(
		character: OpeningCurlyBracketCharacter,
		index: Index,
	): FunctionHeaderParser | StatementsRestStatementsAfterOperatorParser {
		const blockContentInitialWhitespace = createWhitespaceConcreteSyntaxTreeNode(
			this.statementsRestStatementsAfterOperatorWhitespaceSegments,
			{
				starting: this.statementsRestStatementsAfterOperatorWhitespaceSegmentsStartingIndex,
				ending: this.statementsRestStatementsAfterOperatorWhitespaceEndingIndex,
			},
		);
		const blockOpeningBracket = createBlockOpeningBracketConcreteSyntaxTreeNode(character, index);
		const blockContent = createBlockContentConcreteSyntaxTreeNode(
			blockContentInitialWhitespace,
			this.statementsRestStatementsStatements,
			this.blockContentFinalWhitespace,
			{
				starting: this.statementsRestStatementsStatementsStartingIndex,
				ending: this.blockContentEndingIndex,
			},
		);
		const block = createBlockConcreteSyntaxTreeNode(
			blockOpeningBracket,
			blockContent,
			this.blockClosingBracket,
			{
				starting: index,
				ending: this.blockEndingIndex,
			},
		);
		const [firstBlockStackEntry] = this.blockStack;
		if (typeof firstBlockStackEntry === "undefined") {
			const functionBody = createFunctionBodyConcreteSyntaxTreeNode(block, {
				starting: index,
				ending: this.functionBodyEndingIndex,
			});
			const functionHeaderParser = new FunctionHeaderParser(
				index,
				functionBody,
				this.functionEndingIndex,
				this.functionsRestFunctions,
				this.functionsEndingIndex,
				this.sourceFileContentFinalWhitespace,
				this.sourceFileContentEndingIndex,
			);
			return functionHeaderParser;
		}
		const restBlockStackEntries: readonly (readonly [
			statementsRestStatements: StatementsRestStatementsConcreteSyntaxTreeNode | null,
			statementsEndingIndex: Index,
			finalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
			contentEndingIndex: Index,
			closingBracket: BlockClosingBracketConcreteSyntaxTreeNode,
			endingIndex: Index,
		])[] = this.blockStack.slice(1);
		const statementsRestStatementsStatements = createStatementsConcreteSyntaxTreeNode(
			block,
			firstBlockStackEntry[0],
			{
				starting: index,
				ending: firstBlockStackEntry[1],
			},
		);
		const statementsRestStatementsAfterOperatorParser =
			new StatementsRestStatementsAfterOperatorParser(
				index,
				statementsRestStatementsStatements,
				firstBlockStackEntry[1],
				firstBlockStackEntry[2],
				firstBlockStackEntry[3],
				firstBlockStackEntry[4],
				firstBlockStackEntry[5],
				restBlockStackEntries,
				this.functionBodyEndingIndex,
				this.functionEndingIndex,
				this.functionsRestFunctions,
				this.functionsEndingIndex,
				this.sourceFileContentFinalWhitespace,
				this.sourceFileContentEndingIndex,
			);
		return statementsRestStatementsAfterOperatorParser;
	}
	public parseClosingCurlyBracket(): never {
		throw new Error("Not implemented.");
	}
	public parseOpeningRoundBracket(): never {
		throw new Error("Not implemented.");
	}
	public parseClosingRoundBracket(): never {
		throw new Error("Not implemented.");
	}
	public parseIdentifier(): never {
		throw new Error("Not implemented.");
	}
	public parseOperator(
		character: OperatorCharacter,
		index: Index,
	): StatementsRestStatementsBeforeOperatorParser {
		const statementsRestStatementsOperator = createOperatorConcreteSyntaxTreeNode(character, index);
		const statementsRestStatementsAfterOperatorWhitespace = createWhitespaceConcreteSyntaxTreeNode(
			this.statementsRestStatementsAfterOperatorWhitespaceSegments,
			{
				starting: this.statementsRestStatementsAfterOperatorWhitespaceSegmentsStartingIndex,
				ending: this.statementsRestStatementsAfterOperatorWhitespaceEndingIndex,
			},
		);
		const statementsRestStatementsBeforeOperatorParser =
			new StatementsRestStatementsBeforeOperatorParser(
				index,
				statementsRestStatementsOperator,
				statementsRestStatementsAfterOperatorWhitespace,
				this.statementsRestStatementsStatements,
				this.statementsEndingIndex,
				this.blockContentFinalWhitespace,
				this.blockContentEndingIndex,
				this.blockClosingBracket,
				this.blockEndingIndex,
				this.blockStack,
				this.functionBodyEndingIndex,
				this.functionEndingIndex,
				this.functionsRestFunctions,
				this.functionsEndingIndex,
				this.sourceFileContentFinalWhitespace,
				this.sourceFileContentEndingIndex,
			);
		return statementsRestStatementsBeforeOperatorParser;
	}
	public finalize(): never {
		throw new Error("Not implemented.");
	}
}
