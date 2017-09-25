import { expect } from 'chai';
import { options, game } from '../src/js';

describe('game is Rock Paper Scissor', () => {
  const { rock, paper, scissor } = options;

  it('Rock shoud say Rock', () => {
    expect(rock).to.eql('Rock');
  });
  
  it('Paper shoud say Paper', () => {
    expect(paper).to.eql('Paper');
  });

  it('Scissor shoud say Scissor', () => {
    expect(scissor).to.eql('Scissor');
  });

  it('game should say tie', () => {
    expect(game(paper, paper)).to.eql('TIE');
  });
  
  it('Paper should win', () => {
    expect(game(rock, paper)).to.eql('Paper wins!!');
  });

  it('Scissor should win', () => {
    expect(game(paper, scissor)).to.eql('Scissor wins!!');
  });

  it('Rock should win', () => {
    expect(game(rock, scissor)).to.eql('Rock wins!!');
  });
});


