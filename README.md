# Grounded

Grounded is an open-source AI system for analysing short-form videos and checking whether the factual claims inside them are supported, misleading, false, or unverifiable.

It takes a video as input, extracts claims from speech, captions, visuals, and context, then uses an agentic research pipeline to verify those claims against credible sources.

## Why Grounded Exists

Short-form content is fast, emotional, and often stripped of context. A claim can spread widely before anyone checks whether it is actually true.

Grounded is built around a simple idea:

> Make verification easier than staying confidently wrong.

The goal is not to punish people for being uncertain. The goal is to make uncertainty visible, encourage better research habits, and help people separate evidence from vibes.

## Features

- Video input analysis
- Audio transcription
- Caption and on-screen text extraction
- Visual clue detection
- Atomic claim extraction
- Parallel research agents
- Source quality assessment
- Evidence synthesis
- Truthfulness scoring
- Confidence scoring
- Explanation of reasoning
- Detection of misleading-but-technically-true claims
- Support for “unverifiable” and “missing context” verdicts

## Example Output

```json
{
  "claim": "The video claims that a new law was passed banning electric cars in the UK.",
  "verdict": "likely_false",
  "confidence": 0.86,
  "reasoning": [
    "No official UK government source supports the claim.",
    "Recent transport policy documents discuss regulation, not a ban.",
    "The video appears to misrepresent a local emissions policy as national law."
  ],
  "sources": [
    {
      "title": "Official government transport policy",
      "url": "https://example.gov.uk",
      "relevance": "high"
    }
  ]
}
```

## Verdict Types

Grounded does not reduce everything to true or false.

Possible verdicts include:

- `true`
- `likely_true`
- `false`
- `likely_false`
- `misleading`
- `missing_context`
- `unverifiable`
- `satire_or_opinion`
- `needs_human_review`

## Architecture Overview

```txt
Video Input
   ↓
Audio + Frame Extraction
   ↓
Transcription + OCR + Visual Analysis
   ↓
Claim Extraction
   ↓
Research Planning
   ↓
Parallel Source Retrieval
   ↓
Evidence Comparison
   ↓
Verdict + Confidence Score
   ↓
Human-Readable Explanation
```

## Development Status

Grounded is currently a work in progress.

### Core

- [ ] Video upload/input
- [ ] Video metadata extraction
- [ ] Audio extraction
- [ ] Speech-to-text transcription
- [ ] Frame extraction
- [ ] OCR for on-screen text
- [ ] Visual clue detection

### Claim Analysis

- [ ] Atomic claim extraction
- [ ] Claim deduplication
- [ ] Claim prioritisation
- [ ] Opinion vs factual claim detection
- [ ] Satire/parody detection
- [ ] Missing-context detection

### Research System

- [ ] Research planning agent
- [ ] Parallel research task execution
- [ ] Web source retrieval
- [ ] Official source prioritisation
- [ ] Academic/source database support
- [ ] Source credibility scoring
- [ ] Evidence comparison
- [ ] Contradiction detection

### Verdict System

- [ ] Verdict classification
- [ ] Confidence scoring
- [ ] Evidence-backed reasoning
- [ ] Source citations
- [ ] Human-readable summary
- [ ] Human review mode

### Product

- [ ] CLI
- [ ] API
- [ ] Web dashboard
- [ ] Browser extension
- [ ] Public demo
- [ ] Documentation

### Evaluation

- [ ] Test dataset
- [ ] Benchmark suite
- [ ] False-positive analysis
- [ ] False-negative analysis
- [ ] Bias and safety review

## Design Principles

Grounded should be:

- Transparent over authoritative
- Evidence-first
- Uncertainty-aware
- Source-grounded
- Resistant to political or ideological capture
- Useful without being condescending
- Careful with claims that are still developing
- Clear about what it does not know

## What Grounded Is Not

Grounded is not:

- A censorship tool
- A replacement for expert judgment
- A universal truth machine
- A political arbiter
- A reason to blindly trust AI

Grounded should help users think better, not outsource thinking entirely.

## Installation

Setup instructions will be added as the project develops.

## Usage

```bash
# Example, this project is still work in progress
grounded analyse ./video.mp4
```

Example response:

```txt
Verdict: Misleading
Confidence: 78%

The central claim is based on a real statistic, but the video omits important context about the date, location, and methodology.
```

## Contributing

Contributions are welcome.

Good areas to contribute:

- Claim extraction
- Fact-checking datasets
- Source ranking
- Misinformation taxonomy
- UI/UX
- Browser extensions
- Evaluation benchmarks
- Documentation

Before opening a pull request, please create an issue explaining the change you want to make.

## Ethics

Grounded deals with sensitive information environments. Contributors should be careful about overclaiming what the system can know.

The project should always distinguish between:

- verified facts
- strong evidence
- weak evidence
- disputed claims
- missing context
- opinion
- satire
- uncertainty

False positives can damage trust. False negatives can allow misinformation to spread. The system should be designed with humility.

## License

MIT License

Copyright (c) 2026 Vihanga

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
